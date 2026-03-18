import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "motion/react"

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth")
    }, 4500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1773800662/Untitled_design_2_jcjlud.png')] bg-cover bg-center bg-no-repeat opacity-80" />
      
      {/* Window Glow Effect */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1773800662/Untitled_design_2_jcjlud.png')] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen"
        style={{ filter: 'contrast(2) brightness(1.2) blur(16px)' }}
      />
      
      <div className="absolute inset-0 z-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1], keyframes: [0, 1, 0, 1, 0, 1, 1] }}
          className="neon-sign-auth font-display text-6xl font-black tracking-widest sm:text-8xl"
        >
          STONE AIO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="neon-sign-auth-subtle mt-6 font-display text-lg font-medium tracking-widest uppercase sm:text-2xl"
        >
          Your 24/7 AI Agent Workforce
        </motion.p>
      </motion.div>

      {/* Retro Subtle Loading Bar */}
      <motion.div
        className="absolute bottom-12 z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="relative h-1.5 w-64 border border-white/20 bg-black/50 p-[1px]">
          <motion.div
            className="h-full bg-[#00f3ff]/70"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </div>
  )
}
