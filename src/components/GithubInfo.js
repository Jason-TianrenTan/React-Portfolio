import React, { useEffect, useState } from "react"
import { getUserGithubInfo } from "./io/GithubFeed"
const GithubInfo = () => {
  const [jslines, setJslines] = useState(0);
  useEffect(() => {
    getUserGithubInfo();
  }, [])

  const getUserGithubInfo = () => {
    let url = "https://api.github.com/repos/Jason-TianrenTan/React-Portfolio/contents/"
    walkRepo(url)
  }

  const walkRepo = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.forEach(file => {
          let furl = file.url
          if (file.type === "file") {
            if (file.name.endsWith('.js')) {
                fetch(furl)
                    .then(res => res.json())
                    .then(data => {
                        setJslines(prev => prev + data.content.split("\n").length);
                    });
            }
          } else {
            walkRepo(furl);
          }
        })
      })
  }

  return <p>Lines of JavaScript Maintaining the Website: {jslines}</p>
}
export default GithubInfo
