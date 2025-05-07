import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

export default function App() {
  const [jogador, setJogador] = useState('');
  const [maquina, setMaquina] = useState('');
  const [resultado, setResultado] = useState('');

  function jogar(escolha: string) {
    const sorteio = opcoes[Math.floor(Math.random() * 3)];
    setJogador(escolha);
    setMaquina(sorteio);
    setResultado(verificarResultado(escolha, sorteio));
  }

  function verificarResultado(jogador: string, maquina: string): string {
    if (jogador === maquina) return 'Empate!';
    if (
      (jogador === 'Pedra' && maquina === 'Tesoura') ||
      (jogador === 'Papel' && maquina === 'Pedra') ||
      (jogador === 'Tesoura' && maquina === 'Papel')
    ) {
      return 'Você venceu!';
    }
    return 'Você perdeu!';
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Jogo Pedra, Papel e Tesoura</Text>

      <Text style={styles.subtitulo}>Escolha sua jogada:</Text>
      <View style={styles.botoes}>
        <Button title="Pedra" onPress={() => jogar('Pedra')} />
        <Button title="Papel" onPress={() => jogar('Papel')} />
        <Button title="Tesoura" onPress={() => jogar('Tesoura')} />
      </View>

      <View style={styles.resultados}>
        <Text style={styles.texto}>Você jogou: {jogador}</Text>
        <Text style={styles.texto}>Máquina jogou: {maquina}</Text>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 10,
  },
  botoes: {
    gap: 10,
    marginBottom: 30,
  },
  resultados: {
    marginTop: 20,
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    marginVertical: 5,
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0066cc',
    marginTop: 10,
  },
});
