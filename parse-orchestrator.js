const fs = require('fs');
const yaml = require('js-yaml');

const content = fs.readFileSync('/Users/alvin/src/BMAD-METHOD/bmad-core/agents/bmad-orchestrator.md', 'utf8');
const yamlMatch = content.match(/```yaml\n([\s\S]*?)\n```/);
if (yamlMatch) {
  const yamlContent = yamlMatch[1];
  const config = yaml.load(yamlContent);
  console.log(JSON.stringify(config, null, 2));
} else {
  console.log('No YAML found in file');
}