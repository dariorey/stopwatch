import React, {Component} from 'react'
import {View, FlatList, StyleSheet, Text} from 'react-native'

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class ListComponent extends Component {

    render(){
        return (
            <View style={styles.scroll}>
                <FlatList 
                data={this.props.lap}
                keyExtractor={(item, index) => `key-${index}`}
                renderItem={
                    ({item, index}) => (
                    <Text style={styles.item}>
                        {`#${index}     `}{padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}
                    </Text>)
                }
                />
            </View>
        )
    }

}

export default ListComponent;


const styles = StyleSheet.create({
    scroll: {
        marginTop: '5%',
        maxHeight:'63%',
        backgroundColor:'#C89933',
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: '#5C415D',
        textAlign:'center',
        backgroundColor:'#fff',
        marginBottom: 1
    }
})