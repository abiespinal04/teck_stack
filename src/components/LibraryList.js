import React, { Component } from 'react';
import {FlatList,Text} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';



class LibraryList extends Component {


    
    renderItem(library){
       return <ListItem library={library}/>
    }

    render() { 
        
        return(
            <FlatList
            data={this.props.libraries}
            //the {item} is destructed from the renderItem
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={libray => libray.id}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries:state.libraries}
};
 
export default connect(mapStateToProps)(LibraryList);