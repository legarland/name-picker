import React, { useState } from 'react'

const NamePicker = () => {
  const [data, setData] = useState('')

  const randomize = () => {
    try {
      const lines = data.split('\n')
      const entries = []
      lines.forEach((line) => {
        if (line.indexOf(',') !== -1) {
          const entry = line.split(',')
          const [name, count] = entry
          const num = Number(count.trim())
          if (Number.isNaN(num)) throw new Error('Invalid Format')
          for (let i = 0; i < num; i += 1) {
            entries.push(name)
          }
        } else {
          entries.push(line.trim())
        }
      })

      alert(
        entries.sort(() => 0.5 - Math.random())[
          Math.floor(Math.random() * entries.length)
        ]
      )
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>
      <div className="py-2">
        Enter names below, one name per line. <br />
        Optionally, add the number of entries per name separated by a commma.
        <div className="mt-2">
          <div className="text-xs italic">example</div>
          <div className="py-3 px-4 italic text-sm bg-blue-100 rounded-md inline-block">
            John Doe,10
            <br />
            Jane Doe,5
            <br />
            Johnny Doe
          </div>
        </div>
      </div>
      <textarea
        rows="10"
        className="w-full block bg-gray-800 text-white p-4 mb-2 rounded-md"
        placeholder="Paste names here"
        onChange={(e) => setData(e.target.value)}
      />
      <button
        type="button"
        className="py-1 px-3 rounded-md bg-blue-200"
        onClick={randomize}
      >
        Pick Random Name
      </button>

      {/* <div className="my-5">OR</div>
      <input type="file" name="documents[]" /> */}
    </div>
  )
}

export default NamePicker

// Logan,55
// Melanie,44
// Lilly,33
// Micah,22
// Schroder,11
// Charlie,1
