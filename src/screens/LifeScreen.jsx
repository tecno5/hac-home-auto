import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';

function LifeScreen({setView}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleBannerPress = topic => {
    setSelectedTopic(topic);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{selectedTopic}</Text>
          {/* You can add more details or even a separate component here to display more information based on selectedTopic */}
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.banner}
        onPress={() => handleBannerPress('Routine Medical Checkups')}>
        <Text style={styles.bannerText}>Routine Medical Checkups</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.banner}
        onPress={() => handleBannerPress('Medication Tracking')}>
        <Text style={styles.bannerText}>Medication Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.banner}
        onPress={() => handleBannerPress('Fitness Tracker')}>
        <Text style={styles.bannerText}>Weight Tracker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.banner}
        onPress={() => handleBannerPress('Retirement Planning')}>
        <Text style={styles.bannerText}>Retirement Planning</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.banner}
        onPress={() => handleBannerPress('Investment Tracking')}>
        <Text style={styles.bannerText}>Savings</Text>
      </TouchableOpacity>
      <Button title="Back" onPress={() => setView('home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
  },
  banner: {
    backgroundColor: '#D00000',
    padding: 20,
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 35,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    color: '#FFF',
  },
});

export default LifeScreen;
