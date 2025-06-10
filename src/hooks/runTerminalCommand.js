export default function runTerminalCommand(cmd, { cwd, getNode }) {
  const args = cmd.trim().split(" ")
  const command = args[0]
  let output = ""
  let newCwd = undefined

  if (command === "ls") {
    let targetPath = [...cwd]
    if (args[1]) {
      if (args[1].startsWith("/")) {
        targetPath = args[1].split("/").filter(Boolean)
      } else {
        targetPath = [...cwd, ...args[1].split("/").filter(Boolean)]
      }
    }
    const node = getNode(targetPath)
    if (node && typeof node === "object") {
      output = Object.keys(node).join("  ")
    } else {
      output = "Not a directory"
    }
  } else if (command === "cd") {
    if (args[1] === "..") {
      newCwd = cwd.length > 0 ? cwd.slice(0, -1) : []
      output = ""
    } else if (args[1]) {
      let targetPath
      if (args[1].startsWith("/")) {
        targetPath = args[1].split("/").filter(Boolean)
      } else {
        targetPath = [...cwd, ...args[1].split("/").filter(Boolean)]
      }
      const node = getNode(targetPath)
      if (node && typeof node === "object") {
        newCwd = targetPath
        output = ""
      } else {
        output = "No such directory"
      }
    } else {
      newCwd = []
      output = ""
    }
  } else if (command === "cat") {
    if (!args[1]) {
      output = "Usage: cat <file>"
    } else {
      let fileArr
      if (args[1].startsWith("/")) {
        fileArr = args[1].split("/").filter(Boolean)
      } else {
        fileArr = [...cwd, ...args[1].split("/").filter(Boolean)]
      }
      const node = getNode(fileArr)
      if (typeof node === "string") {
        output = node
      } else {
        output = "No such file"
      }
    }
  } else if (command === "help") {
    output = [
      "ls [dir]          List files/folders (optionally in dir)",
      "cd <dir>          Change directory",
      "cat <file>        Show file contents",
      "help              Show this help",
    ].join("\n")
  } else if (command === "") {
    output = ""
  } else {
    output = `Unknown command: ${command}`
  }

  return { output, newCwd }
}
