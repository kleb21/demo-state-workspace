# DemoWorkspace

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## 🎯 Microfrontends y Nx: Arquitectura Moderna

Este workspace implementa una arquitectura de **Microfrontends con Module Federation** utilizando **Nx** como herramienta de monorepo.

### 📦 ¿Qué son los Microfrontends?

Los microfrontends son una arquitectura que divide una aplicación frontend en piezas más pequeñas e independientes:

- **Desarrollo Independiente**: Equipos diferentes pueden trabajar en módulos separados sin interferir entre sí
- **Despliegue Independiente**: Cada microfrontend puede desplegarse sin afectar a los demás
- **Tecnología Agnóstica**: Posibilidad de usar diferentes frameworks o versiones en cada módulo
- **Escalabilidad**: Equipos y aplicaciones pueden crecer de forma independiente
- **Reutilización de Código**: Componentes compartidos entre múltiples aplicaciones

### 🛠️ ¿Qué es Nx?

Nx es una herramienta de construcción de monorepos que optimiza el desarrollo de aplicaciones a gran escala:

- **Generación de Código**: Scaffolding automático con generadores y schematics
- **Caché Inteligente**: Reutiliza builds anteriores para acelerar el desarrollo
- **Análisis de Dependencias**: Visualiza y gestiona las relaciones entre proyectos
- **Testing Eficiente**: Ejecuta solo los tests afectados por cambios
- **CI/CD Optimizado**: Builds incrementales y ejecución paralela de tareas

### 🚀 Ventajas de Usar Microfrontends + Nx

La combinación de ambos ofrece beneficios únicos:

1. **Gestión Simplificada del Monorepo**
   - Nx maneja las complejidades de múltiples microfrontends en un solo repositorio
   - Configuración centralizada pero proyectos independientes

2. **Module Federation Integrado**
   - Soporte nativo para Webpack Module Federation
   - Configuración automática de hosts y remotes

3. **Optimización de Builds**
   - Solo construye los microfrontends afectados por cambios
   - Caché distribuido reduce tiempos de build hasta en 10x

4. **Dependencias Compartidas**
   - Librerías compartidas (`libs/`) para código común
   - Versionado consistente entre todos los microfrontends

5. **Developer Experience Mejorado**
   - Hot reload funciona entre microfrontends
   - Debugging integrado de múltiples aplicaciones
   - Nx Console para operaciones visuales

6. **Escalabilidad Empresarial**
   - Estructura clara para equipos grandes
   - Boundaries y restricciones de acceso entre módulos
   - Migración y refactoring asistidos

### 🏗️ Arquitectura de Este Workspace

```
┌─────────────────┐
│  monarch-main   │ ← Aplicación Host Principal
│   (Host App)    │
└────────┬────────┘
         │
         ├── apps/projects    → Microfrontend Projects
         ├── apps/contractors → Microfrontend Contractors  
         └── apps/wageData    → Microfrontend Wage Data
         │
         ├── libs/layout   → UI Compartida
         └── libs/shared   → Servicios Compartidos
```

---

## Finish your remote caching setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/ksnH7ih0Pd)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve monarch-main
```

To create a production bundle:

```sh
npx nx build monarch-main
```

To see all available targets to run for a project, run:

```sh
npx nx show project monarch-main
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
