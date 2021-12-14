import React, { useEffect, useState } from "react"
import data from "../yourdata"
import StatsCard from "./atoms/StatsCard"

const Stats = () => {
  const [codeLines, setCodeLines] = useState({})
  useEffect(() => {
    getUserGithubInfo(data.server_urls.repos)
  }, [])

  const getUserGithubInfo = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCodeLines(data))
      .catch(error => console.log(error))
  }

  return (
    <div className="stats-container">
      {Object.keys(codeLines).map((_key, index) => (
        <div className="stats-wrapper">
          <StatsCard key={index} lang={_key} num={codeLines[_key]} />
        </div>
      ))}
    </div>
  )
}
export default Stats
