import { AutoResizeTextarea, Button, Select, Textarea } from "../../../shared/ui";
import { Badge, BadgeType } from "../../../shared/ui/Badge/Badge";
import styles from './sidebar.module.css'
import CloseSvg from '../../../shared/assets/close.svg'
import DataFlow from '../../../shared/assets/dataflow.svg'
import TextInputSvg from '../../../shared/assets/textinput.svg'
import StatusSvg from '../../../shared/assets/status.svg'
import { useUIStore } from "../../../shared/model/store";
import { docTypes } from "../../../shared/model/store/uiStore";

interface Props {
	isOpen: boolean;
	onClose: () => void;
	titleType: string;
	title: string;
	name?: string;
	docType?: BadgeType;
	description?: string;
}

export const Sidebar:React.FC<Props> = ({titleType, title, isOpen, onClose}) => {
			const { 
			setDescription, 
			description, 
			documentName, 
			setDocumentName,
			documentType,
			setDocumentType,
		} = useUIStore();

	return (
	<>
		<div
			className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
			onClick={onClose}
    />

		<div className={`${styles.container} ${isOpen ? styles.open : ''} `}>
			<div className={styles.header}>
				<div className={styles.titleContainer}>
					<div className={styles.documentTitleType}>
						<img src={DataFlow} alt='dataflow'/>
						{titleType}
					</div>
					<div className={styles.dividor} />
					<div className={styles.documentTitle}>
						{title}
					</div>
				</div>
				<div className={styles.closeBar} onClick={onClose}>
					<img src={CloseSvg} alt='close' />
				</div>
			</div>
			<div className={styles.main}>
				<div className={styles.nameTypeBlock}>
					<AutoResizeTextarea value={documentName} onChange={setDocumentName} placeholder="Название"/>
					<div className={styles.documentTypeSelector}>
						<div className={styles.documentTypeText}>
							<img src={StatusSvg} alt="status" />
							<span className={styles.typeDocName}>Тип документа</span>
						</div>
							<Select 
								options={docTypes}
								value={documentType}
								onChange={(val) => setDocumentType(val)}
								renderTrigger={({selectedKey, toggleOpen}) => (
									<div onClick={toggleOpen}>
										<Badge type={selectedKey}/>
									</div>
								)}
							/>
					</div>
				</div>
				<div className={styles.textareaContainer}>
					<div className={styles.textareaDescription}>
						<img src={TextInputSvg} alt="txt" />
						<span>Описание</span>
					</div>
					<Textarea onChange={setDescription} value={description}/>
				</div>
			</div>
				<div className={styles.footer}>
					<Button isDisabled={!description.length || !documentName.length}>Создать</Button>
				</div>
			</div>
	</>
	)
}