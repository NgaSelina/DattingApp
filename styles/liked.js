export default {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  icon: {
    alignSelf: 'center',
    color: '#ddd',
    margin: 'auto',
  },
  notFound: {
    marginTop: 20,
    fontSize: 15,
    color: '#aaa',
  },
  notFoundView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  imageBlock: {
    width: '45%',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 300,
  },
  distance: {
    position: 'absolute',
    bottom: 0,
    //right: 0,
    backgroundColor: '#FF6666',
    paddingHorizontal: 5,
    borderRadius: 100,
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
};
