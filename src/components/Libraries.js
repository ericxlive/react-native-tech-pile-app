import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import Library from './Library';

// Return a large list of libraries.
class Libraries extends Component {

    // Any content inside of here will be called first mount.
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        // Feed data.
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    // Helper method to render a specific row inside our list.
    renderRow(library) { // The element the list is going to render.
        // But which item? 
        return <Library library={library} />;
    }

    render() {
        return (
            <ListView 
                dataSource={this.dataSource} 
                renderRow={this.renderRow}
            />
        ); 
    }
}

// Map the global state object (state) bellow.
const mapStateToProps = state => ({ libraries: state.libraries }) // Return this props.
;

export default connect(mapStateToProps)(Libraries);
