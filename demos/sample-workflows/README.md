# Sample Workflows

This directory contains sample workflows that demonstrate the capabilities of the BMAD™ Orchestrator.

## Available Workflows

### 1. E-commerce Platform Development

File: `ecommerce-platform-workflow.yaml`

This workflow demonstrates the complete development lifecycle of an e-commerce platform, including:
- Requirements gathering
- System design
- Implementation
- Testing
- Deployment

### 2. Mobile App Development

File: `mobile-app-workflow.yaml`

This workflow shows the development process for a mobile application, covering:
- User research
- UX design
- Frontend development
- Backend development
- Testing
- App store deployment

## Usage

To use these sample workflows with the BMAD™ Orchestrator:

1. Load the orchestrator CLI:
   ```bash
   npm run orchestrator
   ```

2. Create a workflow from a sample:
   ```
   *create-workflow "E-commerce Platform" analyst,architect,developer,tester,devops requirements,design,implementation,testing,deployment
   ```

3. Modify the workflow as needed:
   ```
   *modify-workflow workflow-1234567890 {"name": "Custom E-commerce Platform"}
   ```

4. Assign tasks to agents:
   ```
   *delegate "Gather requirements for product catalog" analyst "E-commerce platform requirements"
   ```

5. Monitor progress:
   ```
   *status
   ```

6. Handle issues:
   ```
   *escalate "Database performance issues" "Slow query performance affecting user experience" "high"
   ```

## Customization

These sample workflows can be customized to fit your specific project needs:

1. Modify agent types based on your team structure
2. Adjust phases to match your development process
3. Add or remove tasks as needed
4. Customize resource allocations
5. Modify escalation paths

## Best Practices

When using these sample workflows:

1. Start with a simple workflow and gradually add complexity
2. Customize agent roles to match your team's expertise
3. Adjust timeline estimates based on your team's velocity
4. Regularly review and update workflows based on project progress
5. Use the visualization features to track workflow status

## Support

For more information on using these sample workflows, please refer to the main documentation or contact the BMAD™ support team.