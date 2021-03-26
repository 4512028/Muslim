import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text, FlatList,
    Image, ScrollView,
    TextInput,
    TouchableOpacity, TouchableWithoutFeedback, ImageBackground,
    Alert,
    StatusBar,

} from 'react-native';
import emptyCircle from '../Assets/Icons/emptyCircle.png';
import whitecross from '../Assets/Icons/cro.png';
import fillCircle from '../Assets/Icons/fillCircle.png';

let background = '#0178B9'
let textColor = '#E1E1E1'


class modalComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: ""
        }
    }

    componentDidMount() {

        this.setState({ item: this.props.list })
        console.log(this.props.list)
    }




    render() {
        return (
            <View style={{ width: "100%", height: "30%", }}>
                <View style={styles.modalContainer}>

                    <View style={{ width: "100%", height: 40, flexDirection: "row", paddingHorizontal: 20, alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                        <Text style={{ color: textColor, fontWeight: "bold", fontSize: 20, }}>{this.props.modalHeadding} </Text>
                        <TouchableOpacity onPress={() => { this.props.togglelefunction() }}  >
                            <Image source={whitecross} resizeMode="contain" style={{ height: 25, width: 25, }} />
                        </TouchableOpacity>


                    </View>
                    <FlatList
                        data={this.props.list}
                        style={{ paddingBottom: 50, paddingHorizontal: 20, marginLeft: 20, width: "100%", }}
                        showsVerticalScrollIndicator={false}
                        // showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity onPress={() => { this.props.onSelectList(item) }} style={{}}>
                                {console.log("xxx")}
                                <View style={{ flexDirection: 'row', width: '100%', paddingVertical: 6, alignItems: "center", }}>
                                    <View style={{ height: 10, width: 10, borderRadius: 5, }}>
                                        <Image source={item.selected == true ? fillCircle : emptyCircle}
                                            resizeMode="contain"
                                            style={{ height: 10, width: 10, borderRadius: 5 }}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                        <Text style={{ color: textColor, fontWeight: item.selected == true ? "bold" : "600", fontSize: 13, marginLeft: 6, }}>  {item.value} </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        )}
                    />


                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: background,
        height: "30%",
        alignSelf: "center",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        overflow: "hidden",

    },
});

export default modalComponent;