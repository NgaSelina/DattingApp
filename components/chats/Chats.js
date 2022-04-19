import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-native';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import AppContext from '../../contexts/AppContext';
import LightHeader from '../layouts/LightHeader';
import {getUserById} from '../../api/user';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons';

const Item = ({name, picture, uid}) => (
  <Link component={TouchableOpacity} to={`/chats/${uid}`}>
    <View style={styles.item}>
      <Avatar.Image size={60} source={{uri: picture}} />
      <Text style={styles.title}>{name}</Text>
    </View>
  </Link>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  item: {
    backgroundColor: '#FFCCCC',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20
  },
  title: {
    marginLeft: 15,
    fontSize: 16,
  },
  iconUsers: {
    color: 'black',
  },
});

export default function Chats() {
  const {user} = useContext(AppContext);

  const [init, setInit] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const sub = firestore()
      .collection('chats')
      .where('aids', 'array-contains', user.uid)
      .onSnapshot(async (res) => {
        try {
          const docs = [];
          for (const chat of res.docs.map((e) => e.data())) {
            const idx = chat.aids.indexOf(user.uid);
            const partUid = chat.aids[(idx + 1) % 2];
            docs.push({...chat, part: await getUserById(partUid)});
          }
          setChats(docs);
          setInit(true);
        } catch (err) {
          console.log(err);
        }
      });

    return () => sub();
  }, []);

  if (!init) {
    return null;
  }

  const renderItem = ({item}) => (
    <Item
      name={item.part.name}
      picture={item.part.picture}
      uid={item.part.uid}
    />
  );

  return (
    <View style={styles.container}>
      <LightHeader title="Chats" />

      <Link component={TouchableOpacity} to={'/groups/grouplist'}>
        <View style={styles.item}>
          <FontAwesomeIcon icon={faUsers} size={35} style={styles.iconUsers} />
          <Text style={styles.title}>Groups</Text>
        </View>
      </Link>

      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.ids}
      />
    </View>
  );
}
