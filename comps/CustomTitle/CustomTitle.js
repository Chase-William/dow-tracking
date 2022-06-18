import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'

import styles from './CustomTitle.module.css'

export default function CustomTitle() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#ef3a41',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#415465' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#415465' }, 
      { innerHeight: 0 }, 
      { opacity: 0, height: 0 }],
    update: { color: '#ef3a41' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Dow', 'Tracking', 'System']), 250))
    ref.current.push(setTimeout(() => set(['Dow', 'Chemical']), 9000))
    ref.current.push(setTimeout(() => set(['Dow', 'Chemical', 'Company']), 12000))
    ref.current.push(setTimeout(() => set(['Dow', 'Tracking', 'System']), 15000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)    
  }, [])  

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
