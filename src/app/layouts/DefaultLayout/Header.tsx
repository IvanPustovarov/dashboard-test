import { Button } from '../../../shared/ui'
import styles from './header.module.css'
import { useUIStore } from '../../../shared/model/store'

export const Header:React.FC = () => {
	const { openSidebar } = useUIStore();
	return <div className={styles.header}>
		<Button onClick={openSidebar}>Создать</Button>
	</div>
}