import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const handler = createMcpHandler((server) => {
  server.tool("echo", { message: z.string() }, async ({ message }) => ({
    content: [{ type: "text", text: `Tool echo: ${message}` }],
  })),
  {
    // Optional server options
  },
  {
    // Optional redis config
    //redisUrl: process.env.REDIS_URL,
    //basePath: "/api", // this needs to match where the [transport] is located.
    maxDuration: 60,
    verboseLogs: true,
  }
});

export { handler as GET, handler as POST, handler as DELETE };