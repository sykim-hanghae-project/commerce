export default function generateKeyword(name: string) {
  let keywords: string[] = []

  const words = name.split(" ")
  for (const word of words) {
    const res = createKeyword(word)
    keywords = keywords.concat(res)
  }

  return keywords
}

function createKeyword(word: string) {
  const keywords: string[] = []

  for (let len = 1; len <= word.length; len += 1) {
    for (let i = 0; i < word.length; i += 1) {
      const end = i + len
      if (end <= word.length) {
        const kw = word.substring(i, end)
        keywords.push(kw)
      }
    }
  }
  
  return keywords
}

