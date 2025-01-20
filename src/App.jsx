import { useState } from 'react'
import React from 'react'
import Hero from './components/Hero'
import { About } from './components/About'
import { NavBar } from './components/NavBar'
import { Features } from './components/Features'

function App() {

  return (
    <>
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <NavBar />
        <Hero />
        <About />
        <Features />

        <section className='z-0 min-h-screen bg-blue-500' />
      </main>
    </>
  )
}

export default App