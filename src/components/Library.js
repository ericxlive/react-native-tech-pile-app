
import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View, 
    LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class Library extends Component { 

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    //renderDescription
    collapse() {
        // Library and also selectedLibraryId comes from this.props.
        const { library, collapsed } = this.props;
        if (collapsed) {
            return (
                <CardSection>
                    <Text>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.collapse()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,

    }
};

// The object is shown as props. Props passed to the component we're wrapping: Library = this.props.
const mapStateToProps = (state, ownProps) => { 
    const collapsed = state.selectedLibraryId === ownProps.library.id;
    return { collapsed }; 
};

// const mapStateToProps = state => ({ libraries: state.libraries })

export default connect(mapStateToProps, actions)(Library);
