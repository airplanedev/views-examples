import { SelectProps, setEnvVars } from "@airplane/views";
import { rest } from "msw";
import { setupWorker } from "msw";
import { faker } from "@faker-js/faker";
faker.seed(123);

const options = Array(10).fill({}).map(() => faker.unique(faker.animal.cat));

export const handlers = [
  rest.post("http://api/v0/tasks/execute", (req, res, ctx) => {
    return res(ctx.json({ runID: "1" }));
  }),
  rest.get("http://api/v0/runs/get", (_, res, ctx) => {
    return res(ctx.json({ status: "Succeeded" }));
  }),
  rest.get("http://api/v0/runs/getOutputs", (_, res, ctx) => {
    return res(ctx.json({ output: options }));
  }),
];

export const worker = setupWorker(...handlers);

setEnvVars("http://api", "token", "", "");
