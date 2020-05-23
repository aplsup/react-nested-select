import React from "react";

const borderRadius = "3px"

const listItem: React.CSSProperties = {
    padding: "5px",
    display: "flex"
}

const optionsContainer = (visible: boolean): React.CSSProperties => {
    return {
        border: "1px solid lightgrey",
        borderRadius,
        cursor: "pointer",
        display: `${visible? "block" : "none"}`
    }
}

const input: React.CSSProperties = {
    border: "1px solid lightgrey",
    borderRadius,
    cursor: "pointer",
}

export { listItem, optionsContainer, input }
