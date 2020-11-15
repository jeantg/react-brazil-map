export { default as MapBrazil } from './components/MapBrazil/index'
export interface PropsPathMap {
  title: string
  d1: string
  d2?: string
  transform: string
  districtItem: string
}
export interface PropsPathMapItem {
  coordenate: string
}

export interface Props {
  width?: number
  height?: number
  bg?: string
  fill?: string
  colorLabel?: string
  colorStroke?: string
  onChange?: (param: string) => void
}

export interface PropsStyle {
  fill?: string
  bg?: string
  colorLabel?: string
  colorStroke: string
  defaultBg: string
  defaultFill: string
}
