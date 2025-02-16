"use client"

import { motion } from "framer-motion"
import { useState, useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import * as THREE from "three"
import ScrollReveal from "./ScrollReveal"
import type React from "react"
import { toast } from "react-hot-toast"

const vertexShader = `
  varying vec3 vNormal;
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.15);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uMousePosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  
  vec3 waterColor = vec3(0.0, 0.3, 0.6);
  vec3 landColor = vec3(0.1, 0.5, 0.1);
  vec3 cloudColor = vec3(1.0, 1.0, 1.0);
  vec3 shadowColor = vec3(0.0, 0.0, 0.9);

  float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u * u * (3.0 - 2.0 * u);
    
    float res = mix(
      mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
      mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
    return res * res;
  }

  float fbm(vec2 p) {
    float total = 0.0;
    float amplitude = 1.0;
    for (int i = 0; i < 5; i++) {
      total += noise(p) * amplitude;
      p *= 2.0;
      amplitude *= 0.5;
    }
    return total;
  }

  void main() {
    // Generate landmasses
    float land = smoothstep(0.4, 0.6, fbm(vUv * 5.0 + uTime * 0.01));
    
    // Generate clouds with 3D effect
    float cloudBase = fbm(vUv * 10.0 + uTime * 0.02);
    float cloudDetail = fbm(vUv * 20.0 - uTime * 0.01);
    float clouds = smoothstep(0.5, 0.8, cloudBase * cloudDetail);
    
    // Mix water and land colors
    vec3 baseColor = mix(waterColor, landColor, land);
    
    // Add clouds with depth
    float cloudDepth = smoothstep(0.5, 0.8, clouds);
    baseColor = mix(baseColor, cloudColor, cloudDepth * 0.6);

    // Add inner shadow on the right side
    float shadowIntensity = smoothstep(-0.2, 0.8, vNormal.x);
    baseColor = mix(baseColor, shadowColor, shadowIntensity * 0.5);

    // Atmospheric scattering
    float atmosphere = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    baseColor += vec3(0.3, 0.6, 1.0) * atmosphere * 0.3;

    // Add highlight on hover
    float distanceToMouse = length(vNormal - uMousePosition);
    float highlight = smoothstep(0.2, 0.0, distanceToMouse);
    baseColor += vec3(0.3, 0.5, 1.0) * highlight * 0.5;

    gl_FragColor = vec4(baseColor, 1.0);
  }
`

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null)
  const [mousePosition, setMousePosition] = useState(new THREE.Vector3(0, 0, 0))

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uMousePosition: { value: new THREE.Vector3(0, 0, 0) },
      },
      vertexShader,
      fragmentShader,
    }),
    [],
  )

  useFrame(({ clock, mouse }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() / 15
      earthRef.current.material.uniforms.uTime.value = clock.getElapsedTime()

      const x = mouse.x * 2
      const y = mouse.y * 2
      const z = Math.sqrt(1 - Math.min(1, x * x + y * y))
      setMousePosition(new THREE.Vector3(x, y, z))
      earthRef.current.material.uniforms.uMousePosition.value = new THREE.Vector3(x, y, z)
    }
  })

  return (
    <group>
      {/* Shadow plane below the sphere */}
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Main Earth sphere - increased size from 1 to 1.2 */}
      <Sphere ref={earthRef} args={[1.2, 64, 64]}>
        <shaderMaterial attach="material" args={[shaderArgs]} />
      </Sphere>
    </group>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeTECY-yDUnwkzkVgIPueSkebZCoqIZPi6gZOqFJGl17Pf0uA/formResponse"
      
      const formBody = new URLSearchParams({
        "entry.1589465570": formData.name,
        "entry.1945991289": formData.email,
        "entry.1855200950": formData.message,
      })

      const response = await fetch(formUrl, {
        method: "POST",
        mode: "no-cors", // Required for Google Forms
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      })

      // Since we're using no-cors, we can't actually check the response
      // We'll assume success if no error was thrown
      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ScrollReveal>
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
            {/* Form Section */}
            <div className="w-full lg:w-1/2 max-w-2xl mx-auto lg:mx-0">
              <motion.form
                className="space-y-6"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm md:text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm md:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm md:text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>
            </div>

            {/* 3D Model Section */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Canvas 
                  camera={{ 
                    position: [0, 0, 3.5],
                    fov: 40,
                    near: 0.1,
                    far: 1000
                  }}
                >
                  <ambientLight intensity={0.1} />
                  <pointLight position={[10, 10, 10]} intensity={1.5} />
                  <directionalLight position={[5, 5, 5]} intensity={1} />
                  <Earth />
                </Canvas>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

export default Contact

