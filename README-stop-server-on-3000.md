# Stop a server running on port 3000

```bash
lsof -ti:3000 | xargs kill
```
