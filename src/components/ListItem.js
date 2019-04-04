import React, { Component } from 'react';
import {Text,LayoutAnimation,TouchableWithoutFeedback,View,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import CardSection from './common/CardSection';
import * as actions from '../actions';


class ListItem extends Component {
   
    componentDidUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription(){
        
        const{library,expanded} = this.props;
        if(expanded){
            return(
                <CardSection>
                <Text style={{flex:1}}>
                {library.description}
                </Text>
                </CardSection>
            )
        }
    }

    render() { 
        const{titleStyle} = styles
        const{id,title} = this.props.library;

        
        return ( 
            <TouchableWithoutFeedback 
            /*the id is destructed from the library props and passed to the
            selectLibrary action which its then set to the selectedLibraryId
            reducer
            */
            onPress={()=> this.props.selectLibrary(id)}
            >
                <View>
            <CardSection>
                <Text style={titleStyle}>{title}</Text>
            </CardSection>
            {this.renderDescription()}
            </View>
            </TouchableWithoutFeedback>
         );
    }
}
 const styles = {
     titleStyle:{
         fontSize: 18,
         paddingLeft:15
     }
 };

 const mapStateToProps = (state,ownProps) => {
     /*The library props comes from the libraryList,
     the selectedLibraryId comes from the reducer props.
     Also, the selectedLibraryId is being compared with the library props id
     to determine where or not the function testing for the expanded condition
     should conditionally render a component.
    */
     const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded}
 };

export default connect(mapStateToProps,actions)(ListItem);