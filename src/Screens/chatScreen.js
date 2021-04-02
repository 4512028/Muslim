import React from 'react'
import PropTypes from 'prop-types'
import { GiftedChat, Avatar, Day, utils, MessageText, MessageImage, Time, Bubble, } from 'react-native-gifted-chat'
import Profile from '../../images/profile.png'
import HeartBlank from '../../images/heart_blank.png'
import HeartRed from '../../images/heart_red.png'
import Edit from '../../images/edit.png'
import Plus from '../../images/plus.png'
import chatClass from '../Register/GoogleSignIn'
import Camera from '../../images/camera.png'
import SendButton from '../../images/send_button.png'
import Send from '../../images/send.png'
import { Text, View, Image, Animated, SafeAreaView, StatusBar, TouchableOpacity, FlatList, ScrollView, RefreshControl, KeyboardAvoidingView, Dimensions, ActivityIndicator, Keyboard } from 'react-native'
import SlackMessage from './SlackMessage'
import { Fetch_Messages, Send_Messages, LikeMessage, DislikeMessage } from '../../redux/action/action';
import styles from '../Register/styles'
import jwt_decode from "jwt-decode";
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const screenHeight = Dimensions.get("window").height

const MyStatusBar = ({ ...props }) => (
    <View style={styles.statusBar}>
        <StatusBar translucent {...props} />
    </View>
);

class Chat extends React.Component {
    constructor(props) {
        super(props);
        //this.scroll = null;
        //this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.state = {
            chatMessage: "",
            chatMessages: this.props.messagess,
            username: "Ali",
            Messages: [],
            emailId: '',
            userSelf: "",
            refreshing: false,
            decode: "",
            initialMessage: [],
            sendMessage: false,
            heartSelect: false,
            decode: {},
            like: [],
            groupFollowers: [],
            page: 1,
            isLiked: '',
            lastMessage: "",
            UserName: "",
            GroupInfo: this.props.route.params.membersData,
            chatImage: this.props.route.params.chatImage,
            chatName: this.props.route.params.chatName,
            groupType: this.props.route.params.groupType,
            day: null,
            showDay: true,
            firstMessageDay: [],
            messageLength: '',
            //userData: this.props.route.params.data
        }
        //console.log('phonettttbbb',this.props.route.params.membersData)
        //console.log("in constructor Method", "okokoko", this.props.messagess)
        //this.gotoChat();
        this.loadChats();

        //   var token = this.props.token;
        //   var decoded = jwt_decode(token);

        //this.setState({chatmessages: this.props.messagess})
    }

    // _onRefresh = () => {
    //   this.setState({refreshing: true});
    //   this.loadChats();
    //   this.setState({refreshing: false});

    // }


    // componentWillUnmount () {
    //   this.keyboardDidShowListener.remove();
    // }

    // _keyboardDidShow() {
    //   this.scroll.scrollToEnd();
    // }
    //   gotoChat=()=> {

    //     for(let i = 0; i <this.props.route.params.messages.length; i++){

    //         this.state.chatMessages.push(this.props.route.params.messages[i])

    //         console.log(this.state.chatMessages[i].message_body, 'yybrhbgwthyz')
    //         }
    //   }






    async componentWillMount() {

        const data = this.fetchGetMessages();
        //alert(this.state.initialMessage)

        console.log("in componentWillMount Method", "okokoko", data)

        //alert(this.props.route.params.membersData.is_follower)

        //alert(this.props.route.params.numbers)


        if (this.props.route.params.membersData.fresh == true) {

            //alert('iiii')

            Chat.socket = io("https://harrisgroupchatnew.herokuapp.com/");

            //Chat.socket = io("http://192.168.100.203:5001");

            Chat.socket.on("connect", async () => {

                //alert("socket connecteddddd")
                //const groupId = parseInt(this.props.route.params.membersData.id)
                Chat.socket.emit("join", { "token": this.props.token }, (data) => {
                    console.log(data, "asdfg")
                });

            })

            Chat.socket.on('recieveMessage', (data) => {

                this.state.initialMessage.unshift(data);
                console.log(data, 'data')
                this.setState({ sendMessage: false })


                //this.setState({Messages: [...this.state.Messages, this.state.chatMessages], chatMessages:[]})
                console.log(this.state.chatMessages, "chatMessages")
                console.log(data, "receive")
            })

            Chat.socket.on('connect_error', (err) => {
                console.log(`Socket error: ${err}`)
            })

            Chat.socket.on('disconnect', () => {
                console.log("Disconnected Socket!")
            })
        }
        else {

            //alert('hhhh')

            Chat.socket = io("https://harrisgroupchatnew.herokuapp.com/");

            //Chat.socket = io("http://192.168.100.203:5001");

            Chat.socket.on("connect", async () => {

                //alert("socket connecteddddd")
                const groupId = parseInt(this.props.route.params.membersData.id)
                Chat.socket.emit("join", { "token": this.props.token, "group_id": groupId }, (data) => {
                    console.log(data, "asdfg")
                });

            })

            Chat.socket.on('recieveMessage', (data) => {

                this.state.initialMessage.unshift(data);
                console.log(data, 'dataokoko')
                this.setState({ sendMessage: false })
                //console.log(this.state.initialMessage.length, "length")

                // this.setState({chatMessages: [...this.state.chatMessages, (data)] })
                // this.setState({sendMessage: false})

                // var totalMessages = this.props.messagess.concat(this.state.chatMessages)
                // this.setState({totalMessages: totalMessages})
                //this.setState({Messages: [...this.state.Messages, this.state.chatMessages], chatMessages:[]})
                console.log(this.state.chatMessages, "chatMessages")
                console.log(data, "receive")
            })

            Chat.socket.on('connect_error', (err) => {
                console.log(`Socket error: ${err}`)
            })

            Chat.socket.on('disconnect', () => {
                console.log("Disconnected Socket!")
            })

        }

        //chatClass.setupSocket()

        // this.socket = io( "https://harrisgroupchat.herokuapp.com/");
        // this.socket = io("join", data => {alert('Successfully connected')})
        // this.socket.on('connect', (socket) => {
        //   console.log('a user connected');
        // });

        // this.socket.on(("recieveMessage "), msg => {
        //   //alert(msg)
        //     this.setState({chatMessages: [...this.state.chatMessages, (msg)] })
        //     //this.setState({Messages: [...this.state.Messages, this.state.chatMessages], chatMessages:[]})
        //     console.log(this.state.chatMessages,"ababababababaabab")
        // })
        // // socket = io("join", data => {alert('Successfully connected')})

        // this.socket.on("disconnect", () => {
        //   console.log("socket disconnected");
        // });

        // let UserName = await AsyncStorage.getItem("UserName")
        // this.setState({UserName: UserName});

        // const phone = this.props.route.params.phone
        // console.log('phonettttbbb',this.props.route.params)

        // this.timeoutHandle = setInterval(()=>{   

        //   setTimeout(() => {
        //     this.loadChats();
        //      //alert("ok")
        //    }, 7000);  

        // }, 7000);

        // setTimeout(function(){
        //   alert('ok')
        //   this.loadChats()
        // }.bind(this),5000);
        // wait 5 seconds, then reset to false
        //console.log(this.props.route.params.messages[1], 'yyyz')

        //alert(this.props.route.params.messages[1].message_body)

        //this.loadChats();


        //alert(this.props.chats)
        //  this.socket = io("https://harrisgroupchat.herokuapp.com")
        //  this.socket = io("join", data => {console.log('Successfully connected', data)})
        // this.socket.on(("recieveMessage "), msg => {
        //     this.setState({chatMessages: [...this.state.chatMessages, (msg)] })
        //this.setState({Messages: [...this.state.Messages, this.state.chatMessages], chatMessages:[]})
        //console.log(this.state.chatMessages)
        //})

        // let emailId = await AsyncStorage.getItem("EmailId")
        // this.setState({emailId: emailId});

        // for(let i = 0; i <this.props.route.params.messages.length; i++){

        //         this.state.chatMessages.push(this.props.route.params.messages[i])

        //         console.log(this.state.chatMessages[i].message_body, 'yybrhbgwthyz')
        // }


    }

    // componentWillUnmount=()=>{
    //   clearInterval(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    // }

    fetchGetMessages = async (group) => {


        // const searchCredentials = {
        //   "email": this.state.UserEmail,
        //   "password": this.state.UserPassword,
        //   "type": "1"
        // };
        // console.log(searchCredentials, "searchCredentials")
        // //     const value = await AsyncStorage.getItem('lang');
        // // lang = value=='en' ? 'ar': 'en';

        // fetch(domain + '/api/auth/signin', {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(searchCredentials)

        // }).then((response) => response.text())
        //   .then(async (responseText) => {

        //     let responseData = JSON.parse(responseText);


        //     if (responseData.code === 400) {
        //       alert(responseData.message)
        //       this.setState({ isAnimating: false, isDisabled: false })
        //     }
        //     console.log(responseData, "responseData of api")

        //     if (responseData.code === 200) {



        //       await AsyncStorage.setItem("isLogin", this.state.isLogin);

        //       await AsyncStorage.setItem("userData", JSON.stringify(responseData.user));

        //       StartTabs();
        //       this.setState({ isAnimating: false, isDisabled: false })
        //     }

        //   })
        //   .catch((error) => {

        //     console.log("error from home API", error);
        //     //  this.setState({ isAnimating: false, isDisabled: false })
        //     this.setState({ isAnimating: false, isDisabled: false })
        //   });



        await fetch('https://harrisgroupchat.onewoodsolutions.com/api/' + 'fetchmessages', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'bearer' + ' ' + this.props.token,
            },
            body: JSON.stringify(
                {
                    "group_id": this.props.route.params.membersData.id,
                    "page": this.state.page
                }),
        })
            .then(response => {
                const statusCode = response.status;
                const data = response.json();
                return Promise.all([statusCode, data]);

            })

            .then(data => {
                //alert(this.state.page)

                // console.log('Response->',data)

                console.log(data, 'data')
                if (data[1].code == 200) {
                    // dispatch(saveToken(data[1].access_token ,data[1].token_type ))
                    console.log(data[1].data, 'ssssswewewe')


                    //data.length
                    //this.setState({initialMessage : data[1].data}) ;
                    this.setState({ groupFollowers: data[1].data })
                    this.setState({
                        initialMessage: this.state.page === 1 ? data[1].data.group_messages : [...this.state.initialMessage, ...data[1].data.group_messages]
                    })
                    let length = data[1].data.group_messages.length;
                    this.setState({ firstMessageDay: this.state.initialMessage[length - 1] })
                    this.setState({ messageLength: length })
                    console.log(length, "ervevev")

                    let datadsds = data[1].data
                    //alert(this.state.page)
                    console.log(this.state.initialMessage, "initialMessage")
                    //navigation.navigate('Chat', { messages: data[1].data })gfdgf

                }
                else {

                    //alert('data[1].error')
                }
            })
            .catch(err => {
                // alert('failed')
                //alert(err)
            })

    }


    SubmitChatMessage = () => {

        //alert(this.state.chatMessage)


        //   //this.scroll.scrollToEnd();
        if (this.state.chatMessage == "") {
            alert("Plz write Something")
        } else {

            //   this.setState({sendMessage: true});
            //   var token = this.props.token;
            //   var decoded = jwt_decode(token);



            //   // console.log(this.props.route.params.membersData.to_id, 'to_id');
            //   // console.log(decoded.user.id, 'decoded_chat');
            //    console.log(this.props.route.params.membersData, 'from_idddd');


            //   if(decoded.user.id == this.props.route.params.membersData.to_id){

            //       //alert('qqqq')
            //       //console.log(this.props.route.params.membersData,"from_id");

            //        this.props.Send_Messages(this.props.route.params.membersData, this.props.route.params.membersData.from_id, this.state.chatMessage)
            //        this.loadChats();
            //        this.textInput.clear()

            //   }else if(decoded.user.id != this.props.route.params.membersData.to_id){

            //       //alert('mmmm')
            //       //console.log(this.props.route.params.membersData,"to_id");
            //        this.props.Send_Messages(this.props.route.params.membersData, this.props.route.params.membersData.to_id, this.state.chatMessage)
            //        this.loadChats();
            //        this.textInput.clear()

            //   }

            //   //this.scroll.scrollToEnd();
            //   this.loadChats();

            // }
            this.setState({ sendMessage: true })
            var token = this.props.token;
            const decoded = jwt_decode(token);
            // console.log(decoded.user.id, "decodededed")
            const my_id = decoded.user.id;

            if (this.props.route.params.membersData.fresh == true) {

                console.log(this.props.route.params.membersData, "dddddfffff")
                var message = this.state.chatMessage;
                var groupInfo = this.props.route.params.membersData


                const completeMessage = {
                    "token": this.props.token,
                    "message_body": message,
                    "group_type": groupInfo.type,
                    "to_id": parseInt(groupInfo.to_id)
                }
                console.log(completeMessage, "sendMessage ");
                Chat.socket.emit("sendMessage", completeMessage, (data) => {
                    console.log(data, "okokok")
                    if (data.data) {
                        //this.setState({sendMessage: false})
                    }
                });
                //this.socket.emit("username", name);
                var lastMessage = this.state.chatMessage
                this.setState({ lastMessage: lastMessage });
                this.setState({ chatMessage: "" });
            }
            else {

                console.log(this.props.route.params.membersData, "dddddfffff")
                var message = this.state.chatMessage;
                var groupInfo = this.props.route.params.membersData

                const completeMessage = {
                    "token": this.props.token,
                    "group_id": groupInfo.id,
                    "message_body": message,
                    "group_type": groupInfo.type,
                    "to_id": my_id == parseInt(groupInfo.from_id) ? parseInt(groupInfo.to_id) : parseInt(groupInfo.from_id),
                }
                console.log(completeMessage, "sendMessage ");
                Chat.socket.emit("sendMessage", completeMessage, (data) => {
                    console.log(data, "okokok")
                    if (data.data) {
                        //this.setState({sendMessage: false})
                    }
                });
                //this.socket.emit("username", name);
                var lastMessage = this.state.chatMessage
                this.setState({ lastMessage: lastMessage });
                this.setState({ chatMessage: "" });
            }
        }
    }


    loadChats = async () => {
        await this.props.Fetch_Messages(this.props.route.params.membersData)
        this.setState({ sendMessage: false });
        //console.log(this.props.route.params.membersData,"wwwwwwwww")
    }


    selectOptionHeart = async (item) => {

        console.log(this.state.totalMessages, "totalMessages")

        this.state.initialMessage.find((itm, i) => {
            if (itm.id == item.id) {
                //alert(item.id)
                if (itm.isLiked == false) {
                    //alert('ok')
                    this.state.initialMessage[i].isLiked = true
                    this.state.initialMessage[i].message_likes++
                    // console.log(this.state.totalMessages[i], "aaaaaaa")
                    // this.setState({totalMessages: this.state.totalMessages})
                    this.props.LikeMessage(item.id)
                } else
                    if (itm.isLiked == true) {
                        //alert('ok')
                        this.state.initialMessage[i].isLiked = false
                        this.state.initialMessage[i].message_likes--
                        // console.log(this.state.totalMessages[i], "aaaaaaa")
                        // this.setState({totalMessages: this.state.totalMessages})
                        this.props.DislikeMessage(item.id)
                    }
            }
            // if(itm.id!=item.id){
            //   alert("No")
            // }
        })

        // let list = this.state.like
        // let selectedItem =  list.find(x => x == item)
        // let selectedItemIndex =  list.findIndex(x => x == item)


        // if(item.isLiked == false)
        // {
        //   await this.props.LikeMessage(item.id)
        //   this.loadChats();
        //   this.setState({isLiked : true})
        //   // list.push(item)
        //   // this.setState({like:list})
        // }
        // else if(item.isLiked == true)
        // {
        //   await this.props.DislikeMessage(item.id)
        //   this.loadChats();
        //   // list.splice(selectedItemIndex,1)
        //   // this.setState({like:list})
        // }
    }

    handleText = (chatMessage) => {
        this.setState({
            chatMessage: chatMessage
        })
        console.log(this.state.chatMessage, "messagesrrrooosss");
    }

    LoadMoreRandomData = () => {
        //alert('end')
        this.setState({
            page: this.state.page + 1
        }, () => this.fetchGetMessages())
    }



    renderDateStamp = (item) => {
        //console.log(moment(item.created_at).format('LL'), this.state.day, "okokokcuiwehc")
        if (this.state.day != moment(item.created_at).format('LL')) {


            //console.log(moment(item.created_at).format('LL'), this.state.day, "okokokcuiwehc")
            this.setState({ day: moment(item.created_at).format('LL'), showDay: false });

        }
        else {
            this.setState({ day: moment(item.created_at).format('LL'), showDay: false });
        }
    }

    render() {


        //console.log("in Render Method", "okokoko",this.state.initialMessage)

        var token = this.props.token;
        const decoded = jwt_decode(token);
        console.log(this.props.messagess, 'dededede')

        //console.log(this.props.route.params.membersData.name, 'mertyui')

        // for(let i = 0; i <this.state.initialMessage.length; i++){

        // this.state.chatMessages.push(this.state.initialMessage[i])


        // }
        //   var HeartSelect = this.state.heartSelect;

        // function reverseArray(arr) {
        //   var newArray = [];
        //   for (var i = arr.length - 1; i >= 0; i--) {
        //     newArray.unshift(arr[i]);
        //   }
        //   return newArray;
        // }

        // function reverseArraySocket(arr) {
        //   var newArray = [];
        //   for (var i = arr.length - 1; i >= 0; i--) {
        //     newArray.push(arr[i]);
        //   }
        //   return newArray;
        // }

        // const fetchMessages = this.props.messagess
        // console.log(this.props.messagess, "messagesrrrooo");
        // var chatMessagesss= [];
        // const socketMessage =reverseArraySocket(this.state.chatMessages);
        // console.log(socketMessage, "socketMessage")
        // chatMessagesss =socketMessage.concat(reverseArray(fetchMessages));


        // const chatMessagesss = arrayChat.map(function(chatMessage){

        //  return <View>

        //   { decoded.user.id==chatMessage.from_id &&
        //   <View style={[{alignSelf: 'flex-end', width: '70%', padding: 1, borderRadius: 10,}]}>
        //     <View style={[ {flexDirection: 'row', padding:2, borderRadius: 10, justifyContent: 'flex-end'}]}>

        //       <TouchableOpacity 
        //       onPress={() => {this.selectOptionHeart()}}
        //       >

        //         {HeartSelect==false &&
        //           <Image source={HeartBlank} style={{height: 17.5, width: 20,  }}/>
        //          }
        //         {HeartSelect==true &&
        //           <Image source={HeartRed} style={{height: 17.5, width: 20,  }}/>
        //         }

        //       </TouchableOpacity>
        //       <View style={[styles.shadow, { borderRadius: 10, color: 'black', textAlign: 'right', backgroundColor: 'white', justifyContent: 'flex-end'}]}>
        //           <Text style={{alignSelf: 'flex-end', paddingTop: 3, paddingLeft: 10, paddingRight:10, fontSize:16, fontWeight: 'bold'}}>{chatMessage.sender_name}</Text> 
        //           <Text style={{alignSelf: 'flex-end',paddingLeft: 10, paddingRight: 10, paddingBottom: 5}}>{chatMessage.message_body}</Text>
        //       </View>
        //       <View style={{}}>
        //           <Image source={Profile} style={{height: 25, width: 25, borderRadius: 50, }}/>
        //       </View>

        //       </View>
        //     </View>
        //     }


        //      { decoded.user.id!=chatMessage.from_id &&
        //     <View style={[{alignSelf: 'flex-start', width: '70%', padding: 1, borderRadius: 10}]}>
        //     <View style={[ {flexDirection: 'row', padding:2, borderRadius: 10, }]}>
        //       <View style={{}}>
        //           <Image source={Profile} style={{height: 25, width: 25, borderRadius: 50, }}/>
        //       </View>
        //       <View style={[styles.shadow, { borderRadius: 10, color: 'black', textAlign: 'right', backgroundColor: 'white', justifyContent: 'flex-end'}]}>
        //           <Text style={{alignSelf: 'flex-start', paddingTop: 3, paddingLeft: 10, paddingRight:10, fontSize:16, fontWeight: 'bold'}}>{chatMessage.sender_name}</Text>
        //           <Text style={{alignSelf: 'flex-end',paddingLeft: 10, paddingRight: 10, paddingBottom: 5}}>{chatMessage.message_body}</Text>
        //       </View>

        //       </View>
        //     </View>
        //     } 

        //   </View>

        // }
        // )


        let day = null

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F0F0', }}>
                <KeyboardAvoidingView behavior={'height'} style={{ flex: 1, backgroundColor: '#F0F0F0' }} keyboardVerticalOffset={-25} >
                    <MyStatusBar barStyle="light-content" hidden={false} backgroundColor='#2BD1FC' />

                    <View style={{ backgroundColor: '#2BD1FC', width: '100%', height: 160, alignItems: 'center', justifyContent: 'center', marginBottom: 0 }}>
                        <View style={[styles.shadow, { backgroundColor: 'white', flexDirection: 'row', width: '90%', height: 110, borderRadius: 20, paddingTop: 15, paddingBottom: 15, paddingLeft: 3, paddingRight: 3 }]}>
                            <View style={{ width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                {this.state.chatImage != null &&
                                    <Image source={{ uri: this.state.chatImage }} style={{ width: 70, height: 70, borderRadius: 100 }} />
                                }
                                {this.state.chatImage == null &&
                                    <Image source={Profile} style={{ width: 70, height: 70, borderRadius: 100 }} />
                                }

                            </View>
                            <View style={{ width: '75%', height: '100%', flexDirection: 'row' }}>
                                <View style={{ width: '60%', height: '100%', paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 20, width: '100%', }} numberOfLines={1}>{this.state.chatName}</Text>
                                    <Text style={{ fontSize: 11, alignSelf: 'flex-start' }}>Last seen today 14:22</Text>
                                    <Text numberOfLines={2} style={{ fontSize: 11, marginTop: 7, alignSelf: 'flex-start', color: '#8a8a8a' }}>{this.props.route.params.membersData.description}</Text>
                                </View>
                                {this.state.groupFollowers.followers != undefined && this.state.groupType === "public" &&
                                    <View style={{ width: '40%', height: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <View style={{ width: '45%', height: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 10 }}>
                                            <View style={{ width: '70%', height: '35%', backgroundColor: '#2BD1FC', alignItems: 'center', justifyContent: 'center', borderRadius: 10, }}>
                                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{this.state.groupFollowers.followers}</Text>
                                            </View>
                                            <Text style={{ fontSize: 10, marginTop: 3 }}>Followers</Text>
                                        </View>
                                        <View style={{ marginTop: 15 }}>
                                            <View style={{ width: 1.5, height: '60%', backgroundColor: 'black', alignSelf: 'center', paddingBottom: 10 }}></View>
                                        </View>

                                        <View style={{ width: '45%', height: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 10 }}>
                                            <View style={{ width: '70%', height: '35%', backgroundColor: '#2BD1FC', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{this.state.groupFollowers.following}</Text>
                                            </View>
                                            <Text style={{ fontSize: 10, marginTop: 3 }}>Following</Text>
                                        </View>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>

                    <View style={{ height: '72%', backgroundColor: '#F0F0F0', flex: 1, transform: [{ rotate: '180deg' }] }} keyboardShouldPersistTaps={'handled'} >


                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ flex: 1 }}
                            //ref={ref => {this.scrollView = ref}}
                            keyboardShouldPersistTaps={'handled'}
                            contentContainerStyle={{ height: '100%', backgroundColor: '#F0F0F0', }}
                        // refreshControl={
                        //     <RefreshControl
                        //       refreshing={this.state.refreshing}
                        //       onRefresh={this._onRefresh}
                        //     />
                        //   }
                        >



                            <View style={{ padding: 5, marginTop: 20, padding: 1, paddingLeft: 6, paddingRight: 6, transform: [{ rotate: '180deg' }] }}>

                                <FlatList
                                    data={this.state.initialMessage}
                                    style={{ transform: [{ rotate: '180deg' }] }}
                                    onEndReachedThreshold={0}
                                    onEndReached={this.LoadMoreRandomData}
                                    renderItem={({ item, index }) => {
                                        console.log(index, `index ${index}_${moment(item.created_at).format('LL')}`)
                                        return (
                                            <View style={{ transform: [{ rotate: '180deg' }] }}>


                                                {this.state.initialMessage[index + 1] && moment(this.state.initialMessage[index].created_at).format('LL') != moment(this.state.initialMessage[index + 1].created_at).format('LL') &&

                                                    <View style={{ alignItems: 'center', marginBottom: 4, marginTop: 10 }}>
                                                        <Text>{moment(this.state.initialMessage[index].created_at).format('LL')}</Text>
                                                    </View>

                                                }
                                                {!this.state.initialMessage[index + 1] &&

                                                    <View style={{ alignItems: 'center', marginBottom: 4, marginTop: 10 }}>
                                                        <Text>{moment(this.state.initialMessage[index].created_at).format('LL')}</Text>
                                                    </View>

                                                }

                                                {decoded.user.id == item.from_id &&
                                                    <View style={[{ alignSelf: 'flex-end', width: '70%', marginRight: 20, padding: 1, borderRadius: 10, marginBottom: 5 }]}>
                                                        <View style={[{ flexDirection: 'row', padding: 2, borderRadius: 10, justifyContent: 'flex-end' }]}>



                                                            <View style={{ justifyContent: 'center' }}>
                                                                <TouchableOpacity
                                                                    onPress={() => { this.selectOptionHeart(item) }}
                                                                    style={{ alignItems: 'center', marginRight: 0, justifyContent: 'center', padding: 2, height: 30, width: 30, alignSelf: 'center' }}
                                                                >

                                                                    {item.isLiked == false &&
                                                                        <Image source={HeartBlank} style={{ height: 18, width: 18, }} />
                                                                    }
                                                                    {item.isLiked == true &&
                                                                        <Image source={HeartRed} style={{ height: 18, width: 18, }} />
                                                                    }
                                                                    <Text style={{ alignSelf: 'center', fontSize: 13, color: "#95A5A6", marginRight: 0, }}>{item.message_likes}</Text>

                                                                </TouchableOpacity>



                                                            </View>
                                                            <View style={[styles.shadow, { borderRadius: 10, color: 'black', textAlign: 'right', backgroundColor: '#2BD1FC', justifyContent: 'flex-end' }]}>
                                                                <View style={{ position: 'absolute', right: -13, top: 0 }}>
                                                                    <Image source={Profile} style={{ height: 30, width: 30, borderRadius: 50, }} />
                                                                </View>
                                                                <Text style={{ alignSelf: 'flex-start', paddingTop: 3, paddingLeft: 10, paddingRight: 20, fontSize: 16, fontWeight: 'bold' }}>{item.sender_name}</Text>
                                                                <Text style={{ alignSelf: 'flex-end', paddingLeft: 10, paddingRight: 20, paddingBottom: 5 }}>{item.message_body}</Text>
                                                            </View>



                                                            {/* <View style={{ marginLeft: 10, marginLeft: 20, alignItems: 'flex-end'}}>
                                    <Text>{moment(item.created_at).format('LT')}</Text>
                                  </View> */}


                                                        </View>
                                                        <View style={{ marginRight: 20, alignItems: 'flex-end' }}>
                                                            <Text style={{ fontSize: 12 }}>{moment(item.created_at).format('LT')}</Text>
                                                        </View>
                                                    </View>
                                                }


                                                {decoded.user.id != item.from_id && item.from_id != undefined &&
                                                    <View style={[{ alignSelf: 'flex-start', width: '70%', padding: 1, marginLeft: 20, borderRadius: 10, marginBottom: 5 }]}>
                                                        <View style={[{ padding: 2, borderRadius: 10, }]}>
                                                            <View style={{ flexDirection: 'row' }}>

                                                                <View style={[styles.shadow, { borderRadius: 10, color: 'black', textAlign: 'right', backgroundColor: 'white', justifyContent: 'flex-end' }]}>
                                                                    <View style={{ position: 'absolute', left: -13, top: 0 }}>
                                                                        <Image source={Profile} style={{ height: 30, width: 30, borderRadius: 50, }} />
                                                                    </View>
                                                                    <Text style={{ alignSelf: 'flex-start', paddingTop: 3, paddingLeft: 20, paddingRight: 10, fontSize: 16, fontWeight: 'bold' }}>{item.sender_name}</Text>
                                                                    <Text style={{ alignSelf: 'flex-start', paddingLeft: 20, paddingRight: 10, paddingBottom: 5 }}>{item.message_body}</Text>

                                                                </View>

                                                                <View style={{ justifyContent: 'center', }}>

                                                                    <TouchableOpacity
                                                                        onPress={() => { this.selectOptionHeart(item) }}
                                                                        style={{ alignItems: 'center', marginLeft: 0, justifyContent: 'center', padding: 2, height: 30, width: 30, alignSelf: 'center' }}
                                                                    >

                                                                        {item.isLiked == false &&
                                                                            <Image source={HeartBlank} style={{ height: 18, width: 18, }} />
                                                                        }
                                                                        {item.isLiked == true &&
                                                                            <Image source={HeartRed} style={{ height: 18, width: 18, }} />
                                                                        }
                                                                        <Text style={{ alignSelf: 'center', fontSize: 13, color: "#95A5A6", marginLeft: 0, alignItems: 'center', justifyContent: 'center' }}>{item.message_likes}</Text>
                                                                    </TouchableOpacity>

                                                                </View>

                                                            </View>

                                                            <View style={{ marginRight: 10, marginLeft: 20, marginTop: 3 }}>
                                                                <Text style={{ fontSize: 12 }}>{moment(item.created_at).format('LT')}</Text>
                                                            </View>

                                                        </View>


                                                    </View>
                                                }
                                            </View>
                                        )
                                    }
                                    }

                                />
                                {this.state.sendMessage == true &&
                                    <View style={[{ alignSelf: 'flex-end', width: '70%', padding: 1, marginRight: 20, borderRadius: 10, marginBottom: 5 }]}>
                                        <View style={[{ flexDirection: 'row', padding: 2, borderRadius: 10, justifyContent: 'flex-end' }]}>

                                            <View style={{ justifyContent: 'center' }}>
                                                <TouchableOpacity
                                                    onPress={() => { this.selectOptionHeart() }}
                                                    style={{ alignItems: 'center', marginLeft: 0, justifyContent: 'center', padding: 2, height: 30, width: 30, alignSelf: 'center' }}
                                                >


                                                    <Image source={HeartBlank} style={{ height: 18, width: 18, }} />

                                                    <Text style={{ alignSelf: 'center', fontSize: 13, color: "#95A5A6", marginRight: 0, }}>0</Text>
                                                </TouchableOpacity>

                                            </View>

                                            <View style={[styles.shadow, { borderRadius: 10, color: 'black', textAlign: 'right', backgroundColor: '#2BD1FC', justifyContent: 'flex-end' }]}>
                                                <View style={{ position: 'absolute', right: -13, top: 0 }}>
                                                    <Image source={Profile} style={{ height: 30, width: 30, borderRadius: 50, }} />
                                                </View>
                                                <Text style={{ alignSelf: 'flex-start', paddingTop: 3, paddingLeft: 10, paddingRight: 20, fontSize: 16, fontWeight: 'bold' }}>{decoded.user.fullName}</Text>
                                                <Text style={{ alignSelf: 'flex-end', paddingLeft: 10, paddingRight: 20, paddingBottom: 5 }}>{this.state.lastMessage}</Text>
                                            </View>


                                        </View>
                                    </View>
                                }

                                {/* {chatMessagesss} */}


                            </View>


                        </ScrollView>

                    </View>
                    <View style={{ height: 1, backgroundColor: '#cfcfcf' }}></View>

                    {this.props.route.params.membersData.is_follower == 1 &&
                        <View marginBottom={5} style={{ padding: 10 }}>
                            <Text style={{ marginBottom: 5 }}>Admins Active:</Text>
                            <Text>Seen By: 10</Text>
                        </View>
                    }

                    {this.props.route.params.membersData.is_follower != 1 &&
                        <View style={{ height: '9%', marginBottom: 0, marginTop: 4, paddingLeft: 20, paddingRight: 20, backgroundColor: '#F0F0F0' }}>
                            <View style={{ flexDirection: 'row', marginTop: 5, width: '100%', justifyContent: "space-around", marginBottom: 5, alignItems: 'center', }}>
                                <View style={[styles.shadow, { height: 45, flexDirection: 'row', backgroundColor: 'white', borderRadius: 100, width: '83%', paddingStart: 15, paddingEnd: 10 }]}>
                                    <View style={{ width: '15%', marginLeft: -10, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={{ width: 25, height: 25, backgroundColor: '#2BD1FC', alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                                            <Image source={Plus} style={{ height: 12, width: 12, }} />
                                        </TouchableOpacity>
                                        <View style={{ width: 1, height: 20, backgroundColor: '#95A5A6', marginLeft: 5 }}></View>
                                    </View>
                                    <TextInput
                                        autoCorrect={false}
                                        placeholder={'Type a Message'}
                                        value={this.state.chatMessage}
                                        ref={input => { this.textInput = input }}
                                        onSubmitEditing={() => { this.SubmitChatMessage() }}
                                        style={[{ height: 40, alignSelf: 'center', backgroundColor: 'white', borderRadius: 100, width: '80%', paddingStart: 5, paddingEnd: 10 }]}
                                        onChangeText={text => this.handleText(text)} />

                                    <TouchableOpacity style={{ width: 25, height: 45, alignItems: 'center', justifyContent: 'center', }}>
                                        <Image source={Edit} style={{ height: 20, width: 20, }} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    onPress={() => { this.SubmitChatMessage() }}
                                    style={[{ width: '12.5%', height: 45, alignItems: 'center', justifyContent: 'center', marginRight: 5 }]}>



                                    <Image source={SendButton} style={{ height: 56, marginTop: 3, width: 52 }} />


                                    {/* { this.state.chatMessage ==="" &&
                                  <View style={{width: 40, height: 40, backgroundColor: '#2BD1FC', alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
                                    <Image source={Camera} style={{height: 23, width: 26, }}/>
                                  </View>
                                  } */}
                                </TouchableOpacity>
                            </View>
                        </View>
                    }


                </KeyboardAvoidingView>
            </SafeAreaView>

        )
    }
}

Bubble.propTypes = {
    renderUsername: PropTypes.func,

}


function mapStateToProps(state) {
    //console.log(state.oneToOneChat, "onetoone")
    return {
        loader: state.loader,
        token: state.token,
        messagess: state.fetchMessages,
        oneToOneChat: state.goOneToOneChat
        // LoginSuccessful:state.loginsuccessful
    }
}
export default connect(mapStateToProps, { Fetch_Messages, Send_Messages, LikeMessage, DislikeMessage })(Chat)