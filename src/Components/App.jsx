import React from "react";
import List from "./List";
import Counter from "./Counter";
import Card from "./Card";
import contacts from "./Contacts"
import FormTarjetas from "./FormTarjetas";

function App() {
    const [contactList, setContactList] = React.useState(contacts);
    const [newName, setNewName] = React.useState("");
    const [newTel, setNewTel] = React.useState("6148877441");
    const [newMail, setNewMail] = React.useState("algo@mail.com");


    function createCard(contact) {
        // borrar = tomar lista de contacto y eliminarla
        //Se crea la funcion deleteCardApp dentro de createCard para que se cree la función que funcione para 
        //cada tarjeta en especifico
    function deleteCardApp (){
        setContactList((prevValue) => {
                //la siguiente funcion crea un arreglo con todas las tarjetas menos la que tenga el id de la que vamos a borrar.
            return prevValue.filter((item, index) => {
                return item.id !== contact.id;
            })
        })
        
    }

        return (
            <Card 
                key={contact.id}
                namecontact={contact.namecontact} 
                image={contact.image} 
                tel={contact.tel} 
                email={contact.email} 
                deleteCard={deleteCardApp}
            />
        );
    }

    function nameHandlerApp(event) {
        setNewName(event.target.value);
        console.log(newName);
    }

    function telHandlerApp(event) {
        setNewTel(event.target.value);
        console.log(newTel);
    }

    function mailHandlerApp(event) {
        setNewMail(event.target.value);
        console.log(newMail);
    }

    function addContactApp() {
        let idArray = contactList.map(contact => contact.id);
        let idTemp = 1;
        let flagOccupied = true;
        while (flagOccupied){
            idTemp++;
            flagOccupied = idArray.indexOf(idTemp) != -1;
            console.log(flagOccupied);
        } 
        setContactList((prevValue) => [
            ...prevValue,
            {id: idTemp, namecontact: newName, image: "", tel: newTel, email: newMail}
        ]);
    }

    const isLogged = true;

    return (
        <div>
            <FormTarjetas 
                nameHandler={nameHandlerApp}
                telHandler={telHandlerApp}
                mailHandler={mailHandlerApp}
                addContact={addContactApp}
                />
            {isLogged && contactList.map(createCard)}
            <Counter />
            <h1>Cualquier cosa</h1>
            <List 
                book1="El señor de los anillos"
                book2="Harry Potter"
                book3="El alquimista"/>
            <List 
                book1="El psicoanalista"
                book2="El retrato de Dorian Gray"
                book3="El perfume"/>
        </div>
    );
}

export default App;



/*
function App() {

    function createCard(contact) {
        return (
            <Card 
                namecontact={contact.namecontact} 
                image={contact.image} 
                tel={contact.tel} 
                email={contact.email} 
            />
        );
    }

    return (
        <div>
            <Card 
                namecontact={contacts[0].namecontact} 
                image={contacts[0].image} 
                tel={contacts[0].tel} 
                email={contacts[0].email} 
            />
            <Card 
                namecontact={contacts[1].namecontact} 
                image={contacts[1].image} 
                tel={contacts[1].tel} 
                email={contacts[1].email} 
            />
            <Card 
                namecontact={contacts[2].namecontact} 
                image={contacts[2].image} 
                tel={contacts[2].tel} 
                email={contacts[2].email} 
            />
            <Counter />
            <h1>Cualquier cosa</h1>
            <List 
                book1="El señor de los anillos"
                book2="Harry Potter"
                book3="El alquimista"/>
            <List 
                book1="El psicoanalista"
                book2="El retrato de Dorian Gray"
                book3="El perfume"/>
        </div>
    );
}

export default App;


*/