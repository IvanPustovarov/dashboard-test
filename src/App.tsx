import { Sidebar } from "./features/sidebar/ui/Sidebar"
import { DefaultLayout } from "./app/layouts/DefaultLayout";
import { useUIStore } from "./shared/model/store";

function App() {
const { isSidebarOpen, closeSidebar } = useUIStore();
  return (
    <DefaultLayout>
      <Sidebar 
        title="Создание документа" 
        titleType="Документы"
        isOpen={isSidebarOpen} 
        onClose={closeSidebar}
      />
    </DefaultLayout>
  )
}

export default App
