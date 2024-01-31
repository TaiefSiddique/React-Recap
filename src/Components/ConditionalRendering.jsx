import AdminPanel from "./AdminPanel";
import UserPanel from "./UserPanel";


const ConditionalRendering = () => {
    let isLoggedIn = false;
    // let content;
    // if (isLoggedIn) {
    //     content = <AdminPanel></AdminPanel>
    // }
    // else {
    //     content = <UserPanel></UserPanel>
    // }
    return (
        <div>
            Conditional rendering
            {/* {content} */}

            {/* {isLoggedIn ? <AdminPanel></AdminPanel> : <UserPanel></UserPanel>} */}
            {isLoggedIn && <AdminPanel></AdminPanel>}
        </div>
    );
};

export default ConditionalRendering;