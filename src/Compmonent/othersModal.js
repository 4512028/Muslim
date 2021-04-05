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
import Checked from '../Assets/Icons/checked.png';
import Unchecked from '../Assets/Icons/unchecked.png';
import Cross from '../Assets/Icons/close.png';



let background = '#0178B9'
let textColor = '#E1E1E1'


class othersModal extends Component {

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
            <View style={styles.modalContainer}>

                <View style={{
                    backgroundColor: "white", width: "100%", paddingHorizontal: 18, borderRadius: 5, marginVertical: 10
                }}>

                    {/* modal top bar */}
                    <View style={styles.modalTopBar}>

                        <View style={{ justifyContent: 'center', height: 30, }}>
                            <Text style={{ flex: 4, color: '#333333', fontSize: 18, fontWeight: "bold", color: "#0178B9" }}>{this.props.modalHeadding}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.props.togglelefunction}>
                                <Image source={Cross} style={{ resizeMode: "contain", height: 20, width: 20, }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* modal top bar */}


                    {/* modal items */}

                    <View style={{ padding: '0%', height: 100, backgroundColor: "white" }}>

                        <FlatList
                            data={this.props.list}
                            style={{ paddingHorizontal: 18, paddingVertical: 5, }}
                            showsVerticalScrollIndicator={true}
                            showsHorizontalScrollIndicator={false}

                            renderItem={({ item, index }) => (
                                <View>
                                    <TouchableWithoutFeedback onPress={() => { this.props.onSelectList(item) }} style={{}}>
                                        <View style={{ flexDirection: "row", alignItems: "center", padding: "2%" }}>

                                            <Image source={item.selected == true ? Checked : Unchecked} style={{ resizeMode: "contain", height: 18, width: 18 }} />

                                            <Text style={{ color: "#333333", fontSize: 15, marginLeft: 12, }}>{item.value}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            )}
                        />
                    </View>
                    {/* modal items end */}



                    {/* modal foooter */}

                    <View style={styles.modalFooter}>
                        <TouchableOpacity onPress={() => { this.props.goToNextScreen() }} style={styles.modalButton}>
                            <Text style={{ color: "#FFF", fontSize: 12, fontSize: 12, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>Select</Text>
                        </TouchableOpacity>
                    </View>
                    {/* modal foooter  ends*/}

                </View>

            </View>


        );
    }
}

const styles = StyleSheet.create({

    modalContainer: {

        height: 200,
        width: "100%",
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
    modalTopBar: {

        borderBottomColor: "silver",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingVertical: 10,
    },
    modalFooter: {

        padding: 10,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: "silver",
        borderTopWidth: 1,
        marginTop: 10
    },




    modalButton: {
        borderRadius: 25,

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#0178B9",
    },
});

export default othersModal;