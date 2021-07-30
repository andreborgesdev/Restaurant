import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    };

    // Here we need to use a property with an arrow function to be able to get the context (this).
    // Otherwise we would have to do some workaround because a function would the this as undefined
    goToStore = event => {
        // This prevents the form to do the default behavior, which is submitting and refreshing the page
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`)
    }

    render() {
        return (
            <> { /* The <> is the same as having React.Fragment. Better than having a dummy div */ }
                <form action="" className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please enter a store</h2>
                    <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
                    <button type="submit">Visit store -></button>
                </form>
            </>
        )
    }
}

export default StorePicker;