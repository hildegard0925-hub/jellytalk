import { backupSaveData, restoreSaveData, resetAdventureSave } from '../utils/storage'
import useAdventureStore from '../store/adventureStore'
import '../styles/settings.css'


function SettingsPage() {
  const resetAdventure =
    useAdventureStore(
      (state) =>
        state.resetAdventure
    )

  const handleRestoreSave = (
    event
  ) => {

    const file =
      event.target.files?.[0]

    if (!file) {
      return
    }

    restoreSaveData(file)

  }

  return (

    <div className="settings-page">

      <h1 className="settings-title">
        설정
      </h1>

      <div className="settings-section">

        <button
          className="settings-button"
          onClick={backupSaveData}
        >
          데이터 백업
        </button>

        <label className="settings-file-label">

          <span className="settings-button">
            데이터 복원
          </span>

          <input
            type="file"
            accept=".json"
            onChange={handleRestoreSave}
            hidden
          />

        </label>

        <button
          className="settings-button"
          onClick={resetAdventureSave}
        >
          저장 초기화
        </button>

      </div>

    </div>

  )

}

export default SettingsPage