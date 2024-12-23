import { ComponentType } from 'react'

export interface Tab {
  id: string
  name: string
  icon: ComponentType<{ className?: string }>
}