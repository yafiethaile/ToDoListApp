import React from 'react';
import { View, Text } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ tasks, addTask, setTasks }) => {
  return (
    <MainLayout>
    <View>
      <ToDoForm addTask={addTask} setTasks={setTasks} />
      <ToDoList tasks={tasks} />
    </View>
    </MainLayout>
  );
};

export default HomeScreen;