import React from "react";

function List(props) {
    return (
        <ol>
            <li>{props.book1}</li>
            <li>{props.book2}</li>
            <li>{props.book3}</li>
        </ol>
    );
}

export default List;