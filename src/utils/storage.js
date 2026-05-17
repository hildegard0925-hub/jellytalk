export function backupSaveData() {

  const saveData = {

    version: 1,

    exportedAt: Date.now(),

    adventure:

      JSON.parse(
        localStorage.getItem(
          'jellytalk-adventure'
        ) || 'null'
      ),

    record:

      JSON.parse(
        localStorage.getItem(
          'record-storage'
        ) || 'null'
      ),
  }

  const blob = new Blob(

    [
      JSON.stringify(
        saveData,
        null,
        2
      )
    ],

    {
      type: 'application/json'
    }
  )

  const url =
    URL.createObjectURL(blob)

  const link =
    document.createElement('a')

  link.href = url

  link.download =
    'jellytalk-save.json'

  link.click()

  URL.revokeObjectURL(url)

}

export function restoreSaveData(
  file
) {

  const reader = new FileReader()

  reader.onload = () => {

    try {

      const parsedData =
        JSON.parse(reader.result)

      if (
        !parsedData.adventure ||
        !parsedData.record
      ) {

        alert(
          '올바른 세이브 파일이 아닙니다.'
        )

        return
      }

      localStorage.setItem(

        'jellytalk-adventure',

        JSON.stringify(
          parsedData.adventure
        )
      )

      localStorage.setItem(

        'record-storage',

        JSON.stringify(
          parsedData.record
        )
      )

      alert(
        '세이브 복원이 완료되었습니다.'
      )

      window.location.reload()

    } catch {

      alert(
        '세이브 파일을 불러오지 못했습니다.'
      )

    }

  }

  reader.readAsText(file)

}

export function resetAdventureSave() {

  localStorage.removeItem(
    'jellytalk-adventure'
  )

  localStorage.removeItem(
    'record-storage'
  )

  window.location.reload()

}