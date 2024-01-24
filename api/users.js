import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  UpdateCommand,
  PutCommand,
  DeleteCommand,
  ScanCommand,
  DynamoDBDocumnetClient,
} from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";

const client = new DynamoDBClient({ region: "us-east-1" });
const docClient = DynamoDBDocumnetClient.from(client);

export const getUsers = async (req, res) => {
  const command = new ScanCommand({
    ExpressionAttributeNames: {
      name: "#name",
    },
    ProjectionExpression:
      "id, first_name, last_name, email, phone, sport, role",
    TableName: "Users",
  });

  return await docClient.send(command);
};
export const createGame = async (req, res) => {
  const uuid = crypto.randomUUID();
  const { first_name, last_name, email, phone, sport, role } = req.body;
  const command = new PutCommand({
    TableName: "Games",
    Item: {
      id: uuid,
      first_name,
      last_name,
      email,
      phone,
      sport,
      role,
    },
  });

  return await docClient.send(command);
};
export const updateUser = async (user) => {
  const { id, first_name, last_name, email, phone, sport, role } = user;
  const command = new UpdateCommand({
    TableName: "Games",
    Key: {
      id,
    },
    ExpressionAttributeNames: {
      name: "#name",
    },
    UpdateExpression:
      "set #first_name = :first_name, #last_name = :last_name, email = :email, phone = :phone, sport = :sport, role = :role",
    ExpressionAttributeValues: {
      ":first_name": first_name,
      ":last_name": last_name,
      ":email": email,
      ":phone": phone,
      ":sport": sport,
      ":role": role,
    },
    ReturnValues: "ALL_NEW",
  });

  return await docClient.send(command);
};

export const deleteUser = async (id) => {
  const command = new DeleteCommand({
    TableName: "Games",
    Key: {
      id,
    },
  });

  return await docClient.send(command);
};
