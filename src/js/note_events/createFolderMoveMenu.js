// create a context menu to move a note to a certain folder
export function createFolderMoveMenu(note) {
    let setPositionMoveToFolderMenu = createContextMenu(document.querySelector(".folderAddMenu"));
    note.header.addEventListener("contextmenu", e => {

    e.preventDefault();
    const origin = {
        left: e.pageX,
        top: e.pageY
    };
    setPositionMoveToFolderMenu(origin);
    console.log("created");
    return false;
    });
}