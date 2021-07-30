import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.object,
        index: PropTypes.string,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func
    };

    handleChange = event => {
        // Update fish
        // 1. Take copy of current fish
        const updatedFish = {
            ...this.props.fish,
            // Computed properties names. Overwrites the changed fields
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    }

    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <select name="status" onChange={this.handleChange} value={this.props.fish.status} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" placeholder="Desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input image="name" type="text" placeholder="Image" onChange={this.handleChange} value={this.props.fish.image} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove fish</button>
            </div>
        )
    }
}

export default EditFishForm;