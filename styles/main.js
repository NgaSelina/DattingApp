export default {
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 12,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBarIcon: {
    color: '#FF6666',
    zIndex: 2,
  },
  mainImageBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  imageMain: {
    justifyContent: 'center'
  },
  mainImage: {
    //zIndex: -1,
    width: 350,
    //height: 450,
    resizeMode: 'cover',
    alignSelf: 'center',
    alignItems: 'center',
    //justifyContent: 'center',
    borderRadius: 40,
    flex: 0.88
  },
  userinfo: {
    position: 'absolute',
    bottom: 0,
    //left: 0,
    width: '75%',
    alignItems: 'center',
    backgroundColor: '#FF6666',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 30,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  location: {
    color: 'white',
    fontSize: 14,
  },
  icon: {
    backgroundColor: '#FFCCCC',
    borderRadius: 200,
    padding: 20,
    marginHorizontal: 18,
  },
  bottomBar: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dislikeBtn: {
    color: 'red',
  },
  saveBtn: {
    color: 'red',
  },
  likeBtn: {
    color: 'red',
  },
  notFoundView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundIcon: {
    alignSelf: 'center',
    color: '#ddd',
    margin: 'auto',
  },
  notFound: {
    marginTop: 20,
    fontSize: 15,
    color: '#aaa',
  },
  notFoundButton: {
    marginTop: 15,
    //backgroundColor: '#FF6666'
  },
};
