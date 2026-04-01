# 🌿 LeafON — Sistema Inteligente de Monitoramento de Plantas

O **LeafON** é um sistema inteligente de monitoramento e irrigação automatizada de plantas, desenvolvido para ambientes urbanos.
O projeto integra **IoT, aplicações web/mobile/desktop e backend**, permitindo que usuários acompanhem a saúde de suas plantas em tempo real e automatizem cuidados essenciais.

---

## 🚀 Visão Geral

O LeafON é composto por:

* 🌱 Dispositivo IoT (sensores + atuadores)
* 🌐 Aplicação Web (React + Vite)
* 📱 Aplicação Mobile
* 🖥 Aplicação Desktop
* ⚙️ Backend (Spring Boot + Kotlin)
* 📡 Comunicação via MQTT

O sistema coleta dados ambientais e executa ações automáticas, como irrigação baseada em regras definidas pelo usuário.

---

## 🎯 Problema

Muitas pessoas têm dificuldade em manter plantas saudáveis devido a:

* Falta de tempo
* Falta de conhecimento sobre cuidados
* Rega irregular
* Ausência de monitoramento das condições da planta

---

## 💡 Solução

O LeafON resolve esses problemas através de:

* Monitoramento em tempo real
* Irrigação automática
* Alertas inteligentes
* Histórico de dados para tomada de decisão

---

## 🧩 Funcionalidades

### 👤 Usuário

* Cadastro e login
* Gerenciamento de perfil

### 🌿 Planta e Vaso

* Cadastro de planta
* Associação com vaso inteligente
* Visualização do status da planta

### 📊 Monitoramento

* Umidade do solo
* Temperatura
* Luminosidade
* Histórico de leituras

### 💧 Irrigação

* Irrigação manual
* Irrigação automática baseada em regras

### ⚙️ Regras de Automação

Exemplo:

> "Se a umidade estiver abaixo de 40%, irrigar por 10 segundos"

### 🔔 Notificações

* Alertas de baixa umidade
* Eventos de irrigação
* Avisos do sistema

---

## 🏗 Arquitetura do Sistema

```
Dispositivo IoT → MQTT → Backend → API REST → Frontend (Web/Mobile/Desktop)
```

### Tecnologias Utilizadas

#### Frontend (Web)

* React + Vite
* TypeScript
* React Router

#### Backend

* Spring Boot (Kotlin)
* Autenticação JWT
* API REST
* Integração com MQTT

#### Banco de Dados

* PostgreSQL

#### IoT

* ESP32 / Arduino
* Sensores:

  * Umidade do solo
  * Temperatura
  * Luminosidade
* Atuador:

  * Bomba de água

---

## 📁 Estrutura do Projeto (Web)

```
src/
 ├── assets/
 ├── components/
 ├── pages/
 │   ├── Login.tsx
 │   ├── Register.tsx
 │   ├── Profile.tsx
 │   └── Dashboard.tsx
 ├── services/
 ├── styles/
 ├── App.tsx
 └── main.tsx
```

---

## 🖥 Telas do Sistema (Web)

* Login
* Cadastro
* Dashboard
* Perfil

---

## 🔧 Como Executar (Web)

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/leafon-web

# Entrar na pasta
cd leafon-web

# Instalar dependências
npm install

# Rodar projeto
npm run dev
```

---

## 🔐 Autenticação

* Baseada em JWT
* Comunicação segura com o backend
* Rotas protegidas (em desenvolvimento)

---

## 📡 Integração com API (Exemplo)

```
POST   /auth/login
POST   /users
GET    /me
PUT    /me
GET    /devices
POST   /devices/{id}/water
GET    /telemetry
```

---

## 🧪 Escopo do MVP

* 1 vaso inteligente por usuário
* Monitoramento em tempo real
* Irrigação manual e automática
* Regras básicas de automação

---

## 📈 Melhorias Futuras

* Integração com API de clima
* Uso de Inteligência Artificial
* Notificações push
* Suporte a múltiplos dispositivos
* Dashboard avançado com analytics

---

## 🎨 Princípios de Design

* Interface minimalista
* Identidade visual eco-tech
* Bordas arredondadas (12px)
* Sombras suaves
* Alta legibilidade
* Foco em usabilidade

---

## 👨‍💻 Equipe

**Desenvolvedores:**

* Miguel Gomes
* Rafael Santos

**Orientadores:**

* Professor Junior
* Professor Antonio

---

## 🎓 Contexto Acadêmico

Este projeto foi desenvolvido como parte do **Projeto Integrador (PI)** do curso de Desenvolvimento de Software Multiplataforma (DSM) da Fatec.

---

## 📄 Licença

Este projeto possui fins acadêmicos e educacionais.
