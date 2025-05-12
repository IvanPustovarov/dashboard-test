import styles from './badge.module.css'

export type BadgeType = 'reglament' | 'instruction' | 'order'

interface Props {
  type: BadgeType;
}

const badgeConfig: Record<
  BadgeType,
  { label: string; className: string }
> = {
  reglament: {
    label: 'Регламент',
    className: 'reglament',
  },
  instruction: {
    label: 'Инструкция',
    className: 'instruction',
  },
  order: {
    label: 'Распоряжение',
    className: 'order',
  },
};

export const Badge:React.FC<Props> = ({type}) => {
  const config = badgeConfig[type];

  return (
    <span className={`${styles.badge} ${styles[config.className]}`}>
      {config.label}
    </span>
  )
}