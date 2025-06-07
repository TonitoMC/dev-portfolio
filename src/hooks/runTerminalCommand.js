export default function runTerminalCommand(cmd, { cwd, setCwd, getNode, setFile }) {
  const args = cmd.trim().split(" ");
  const command = args[0];
  let output = "";
  let newCwd = undefined;

  // Helper: check if path is in notes
  const isNotesPath = (pathArr) => pathArr[0] === "notes";

  if (command === "ls") {
    let targetPath = [...cwd];
    if (args[1]) {
      if (args[1].startsWith("/")) {
        targetPath = args[1].split("/").filter(Boolean);
      } else {
        targetPath = [...cwd, ...args[1].split("/").filter(Boolean)];
      }
    }
    const node = getNode(targetPath);
    if (node && typeof node === "object") {
      output = Object.keys(node).join("  ");
    } else {
      output = "Not a directory";
    }
  } else if (command === "cd") {
    if (args[1] === "..") {
      newCwd = cwd.length > 0 ? cwd.slice(0, -1) : [];
      output = "";
    } else if (args[1]) {
      let targetPath;
      if (args[1].startsWith("/")) {
        targetPath = args[1].split("/").filter(Boolean);
      } else {
        targetPath = [...cwd, ...args[1].split("/").filter(Boolean)];
      }
      const node = getNode(targetPath);
      if (node && typeof node === "object") {
        newCwd = targetPath;
        output = "";
      } else {
        output = "No such directory";
      }
    } else {
      newCwd = [];
      output = "";
    }
  } else if (command === "cat") {
    if (!args[1]) {
      output = "Usage: cat <file>";
    } else {
      let fileArr;
      if (args[1].startsWith("/")) {
        fileArr = args[1].split("/").filter(Boolean);
      } else {
        fileArr = [...cwd, ...args[1].split("/").filter(Boolean)];
      }
      const node = getNode(fileArr);
      if (typeof node === "string") {
        output = node;
      } else {
        output = "No such file";
      }
    }
  } else if (command === "echo") {
    const match = cmd.match(/^echo\s+"(.*)"\s*>\s*(.+)$/);
    if (match) {
      const text = match[1];
      const filePath = match[2].split("/").filter(Boolean);
      if (isNotesPath([...cwd, ...filePath]) || (cwd[0] === "notes" || filePath[0] === "notes")) {
        setFile([...cwd, ...filePath], text);
        output = "";
      } else {
        output = "Permission denied: must be root to modify system files";
      }
    } else {
      output = "Usage: echo \"text\" > notes/filename.txt";
    }
  } else if (command === "edit") {
    const fileArr = args[1]?.split("/").filter(Boolean) || [];
    if (isNotesPath([...cwd, ...fileArr]) || cwd[0] === "notes" || fileArr[0] === "notes") {
      const current = getNode([...cwd, ...fileArr]) || "";
      const newText = prompt("Edit file:", current);
      if (newText !== null) setFile([...cwd, ...fileArr], newText);
      output = "";
    } else {
      output = "Permission denied: must be root to modify system files";
    }
  } else if (command === "help") {
    output = [
      "ls [dir]          List files/folders (optionally in dir)",
      "cd <dir>          Change directory",
      "cat <file>        Show file contents",
      "echo \"text\" > notes/<file>   Write to a note",
      "edit notes/<file> Edit a note",
      "help              Show this help"
    ].join("\n");
  } else if (command === "") {
    output = "";
  } else {
    output = `Unknown command: ${command}`;
  }

  return { output, newCwd };
}
