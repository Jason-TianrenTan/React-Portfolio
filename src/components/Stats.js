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
    <div className="coding-stats">

        {Object.keys(codeLines).map((_key, index) => (
          <StatsCard key={index} lang={_key} num={codeLines[_key]} />
        ))}
    </div>
  )
}
export default Stats
