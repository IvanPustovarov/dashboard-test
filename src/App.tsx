
import { useState } from 'react';
import './App.css'
import { Badge, Button, Select } from './shared/ui'

function App() {
  const docTypes = {
    reglament: 'Регламент',
    instruction: 'Инструкция',
    order: 'Распоряжение',
  } as const;

  const [selectedType, setSelectedType] = useState<keyof typeof docTypes>('reglament');
  return (
    <>
      <div>
        <Button isDisabled={true} isLoading={true}>lol</Button>
        <Badge type='instruction' />
        <Select 
          options={docTypes}
          value={selectedType}
          onChange={(val) => setSelectedType(val)}
        />
       </div>
    </>
  )
}

export default App
