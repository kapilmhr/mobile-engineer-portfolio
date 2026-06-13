import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Shield } from 'lucide-react';

export function SystemArchitectureSection() {
  const [activeFlow, setActiveFlow] = useState('all');
  const [speed, setSpeed] = useState('normal');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const speeds = { slow: 3, normal: 1.5, fast: 0.5 };
  const currentSpeed = speeds[speed as keyof typeof speeds];

  const layers = [
    { id: 'cicd', label: 'CI/CD Pipeline', color: '#a855f7', y: 60 },
    { id: 'client', label: 'Client Layer', color: '#3b82f6', y: 180 },
    { id: 'edge', label: 'Edge / CDN Layer', color: '#06b6d4', y: 300 },
    { id: 'api', label: 'API Gateway & Auth', color: '#10b981', y: 420 },
    { id: 'services', label: 'Microservices Layer', color: '#f97316', y: 540 },
    { id: 'data', label: 'Data Layer', color: '#f43f5e', y: 660 },
    { id: 'obs', label: 'Observability', color: '#64748b', y: 780 },
  ];

  const nodes = [
    // CI/CD
    { id: 'github', label: 'GitHub', sub: 'Trunk-based dev', layer: 'cicd', x: 40, y: 60, color: '#a855f7', details: 'Trunk-based development with strict branch protection rules and automated PR checks.' },
    { id: 'actions', label: 'GitHub Actions', sub: '80% coverage', layer: 'cicd', x: 165, y: 60, color: '#a855f7', details: 'Automated CI pipelines running unit, UI, and E2E tests. Enforces an 80% code coverage gate.' },
    { id: 'quality', label: 'Quality Gates', sub: 'SonarQube+Snyk', layer: 'cicd', x: 290, y: 60, color: '#a855f7', details: 'Static code analysis and vulnerability scanning (SonarQube + Snyk + CodeQL) integrated directly into the PR workflow.' },
    { id: 'build', label: 'Build & Release', sub: 'Fastlane+EAS', layer: 'cicd', x: 415, y: 60, color: '#a855f7', details: 'Automated app signing, semantic versioning, and deployment to App Store/Play Store using Fastlane and EAS.' },
    { id: 'iac', label: 'Infra as Code', sub: 'Terraform+ArgoCD', layer: 'cicd', x: 540, y: 60, color: '#a855f7', details: 'Declarative infrastructure provisioning (Terraform + Helm) and GitOps-based continuous delivery to EKS via ArgoCD.' },

    // Client
    { id: 'ios', label: 'iOS', sub: 'SwiftUI+Combine', layer: 'client', x: 70, y: 180, color: '#3b82f6', details: 'Native iOS app with SwiftUI, Combine for reactive flows, and SQLite for offline-first capabilities.' },
    { id: 'android', label: 'Android', sub: 'Compose+Room', layer: 'client', x: 210, y: 180, color: '#3b82f6', details: 'Modern Android app using Jetpack Compose for UI and Room database for robust local caching.' },
    { id: 'kmm', label: 'Shared KMM', sub: 'Ktor+Coroutines', layer: 'client', x: 350, y: 180, color: '#3b82f6', dashed: true, details: 'Kotlin Multiplatform Mobile SDK sharing core business logic, networking (Ktor), and state across platforms.' },
    { id: 'web', label: 'Web PWA', sub: 'React+Workbox', layer: 'client', x: 490, y: 180, color: '#3b82f6', details: 'Progressive Web App with React, utilizing Workbox for service workers and IndexedDB for offline support.' },

    // Edge
    { id: 'cloudfront', label: 'CloudFront+WAF', sub: 'DDoS, TLS', layer: 'edge', x: 135, y: 300, color: '#06b6d4', details: 'Global CDN caching static assets, terminating TLS, and WAF protecting against DDoS and SQLi.' },
    { id: 'flags', label: 'Feature Flags', sub: 'LaunchDarkly', layer: 'edge', x: 285, y: 300, color: '#06b6d4', details: 'Real-time feature toggling and A/B testing infrastructure at the edge.' },
    { id: 'push', label: 'Push / WS', sub: 'APNs, FCM', layer: 'edge', x: 435, y: 300, color: '#06b6d4', pulsing: true, details: 'Real-time bi-directional communication via WebSockets (Socket.io) and native push notifications (APNs, FCM).' },

    // API
    { id: 'kong', label: 'Kong Gateway', sub: 'Rate limit, JWT', layer: 'api', x: 135, y: 420, color: '#10b981', details: 'API Gateway handling rate limiting, JWT validation, circuit breaking, and certificate pinning enforcement.' },
    { id: 'auth', label: 'Auth Service', sub: 'OAuth2+PKCE', layer: 'api', x: 285, y: 420, color: '#10b981', details: 'Centralized authentication handling OAuth2 flows, biometric login validation, refresh token rotation, and device fingerprint binding.' },
    { id: 'graphql', label: 'GraphQL BFF', sub: 'Mobile-optimized', layer: 'api', x: 435, y: 420, color: '#10b981', details: 'Backend-for-Frontend aggregating microservices. Mobile-optimized with field masking, query cost limits, persisted queries, and DataLoader for N+1 prevention.' },

    // Microservices
    { id: 'user', label: 'User Service', sub: 'Golang, gRPC', layer: 'services', x: 40, y: 540, color: '#f97316', details: 'High-performance Go service managing user profiles and preferences via gRPC.' },
    { id: 'content', label: 'Content Service', sub: 'Node.js, Cache', layer: 'services', x: 165, y: 540, color: '#f97316', details: 'Node.js microservice serving personalized feeds with cursor pagination and Redis cache.' },
    { id: 'notif', label: 'Notification', sub: 'Python, Fan-out', layer: 'services', x: 290, y: 540, color: '#f97316', details: 'Python service consuming Kafka events to fan-out millions of push notifications via APNs/FCM.' },
    { id: 'sync', label: 'Sync Engine', sub: 'Rust, CRDT', layer: 'services', x: 415, y: 540, color: '#f97316', dashed: true, pulsing: true, details: 'High-throughput Rust engine resolving offline data conflicts using CRDTs and Operational Transformation.' },
    { id: 'ml', label: 'ML Inference', sub: 'SageMaker+CoreML', layer: 'services', x: 540, y: 540, color: '#f97316', details: 'PyTorch models deployed on SageMaker for real-time content ranking, with Core ML / TFLite on-device fallback.' },

    // Data
    { id: 'postgres', label: 'PostgreSQL', sub: 'Multi-AZ, RLS', layer: 'data', x: 70, y: 660, color: '#f43f5e', details: 'Primary relational datastore configured for Multi-AZ high availability, PgBouncer pooling, and Row-Level Security.' },
    { id: 'redis', label: 'Redis Cluster', sub: 'Pub/Sub, Session', layer: 'data', x: 210, y: 660, color: '#f43f5e', details: 'In-memory data grid (ElastiCache) for session store, caching, and pub/sub message broker.' },
    { id: 'kafka', label: 'Kafka', sub: 'MSK, Outbox', layer: 'data', x: 350, y: 660, color: '#f43f5e', pulsing: true, details: 'Event streaming backbone using Amazon MSK, event log for offline sync, Transactional Outbox pattern, and Avro schema registry.' },
    { id: 's3', label: 'S3 + CloudFront', sub: 'Media Storage', layer: 'data', x: 490, y: 660, color: '#f43f5e', details: 'Media storage, image CDN, and adaptive video streaming infrastructure.' },

    // Observability
    { id: 'obs_mobile1', label: 'Mobile Crash', sub: 'Sentry+Crashlytics', layer: 'obs', x: 70, y: 780, color: '#64748b', details: 'Sentry (crash reporting + release health) and Firebase Crashlytics (ANR + crash-free rate).' },
    { id: 'obs_mobile2', label: 'Mobile Perf', sub: 'Datadog+Firebase', layer: 'obs', x: 210, y: 780, color: '#64748b', details: 'Datadog RUM (real user monitoring, session replay, mobile vitals) and Firebase Performance (app start time, HTTP traces, screen render).' },
    { id: 'obs_server1', label: 'Server APM', sub: 'Datadog+Prometheus', layer: 'obs', x: 350, y: 780, color: '#64748b', details: 'Datadog APM (distributed traces, service map) and Prometheus + Grafana (infrastructure metrics, SLO dashboards).' },
    { id: 'obs_server2', label: 'Incident Mgmt', sub: 'PagerDuty', layer: 'obs', x: 490, y: 780, color: '#64748b', details: 'PagerDuty for on-call escalation and incident management.' },
  ];

  const connections = [
    // CI/CD
    { from: 'build', to: 'ios', flows: ['cicd'] },
    { from: 'build', to: 'android', flows: ['cicd'] },
    { from: 'iac', to: 'kong', flows: ['cicd'] },
    { from: 'iac', to: 'postgres', flows: ['cicd'] },

    // Client to Edge
    { from: 'ios', to: 'cloudfront', flows: ['read', 'write'] },
    { from: 'android', to: 'cloudfront', flows: ['read', 'write'] },
    { from: 'web', to: 'cloudfront', flows: ['read', 'write'] },
    { from: 'ios', to: 'push', flows: ['sync'] },
    { from: 'android', to: 'push', flows: ['sync'] },
    { from: 'kmm', to: 'kong', flows: ['read', 'write'] },
    { from: 'kmm', to: 'sync', flows: ['sync'] },

    // Edge to API
    { from: 'cloudfront', to: 'kong', flows: ['read', 'write'] },
    { from: 'cloudfront', to: 's3', flows: ['read'] },
    { from: 'flags', to: 'kong', flows: ['read'] },
    { from: 'push', to: 'sync', flows: ['sync'] },

    // API to Microservices
    { from: 'kong', to: 'auth', flows: ['read', 'write'] },
    { from: 'kong', to: 'graphql', flows: ['read', 'write'] },
    { from: 'graphql', to: 'user', flows: ['write'] },
    { from: 'graphql', to: 'content', flows: ['read'] },
    { from: 'graphql', to: 'ml', flows: ['read'] },

    // Microservices to Data
    { from: 'user', to: 'postgres', flows: ['write'] },
    { from: 'content', to: 'redis', flows: ['read'] },
    { from: 'content', to: 'postgres', flows: ['read'] },
    { from: 'sync', to: 'kafka', flows: ['sync', 'write'] },
    { from: 'sync', to: 'postgres', flows: ['sync'] },
    { from: 'ml', to: 'redis', flows: ['read'] },

    // Async / Event Driven
    { from: 'kafka', to: 'notif', flows: ['write', 'sync'] },
    { from: 'notif', to: 'push', flows: ['sync'] },

    // Observability
    { from: 'ios', to: 'obs_mobile1', flows: ['all'] },
    { from: 'android', to: 'obs_mobile2', flows: ['all'] },
    { from: 'kong', to: 'obs_server1', flows: ['all'] },
    { from: 'postgres', to: 'obs_server1', flows: ['all'] },
    { from: 'obs_server1', to: 'obs_server2', flows: ['all'] },
  ];

  const generatePath = (fromId: string, toId: string) => {
    const fromNode = nodes.find((n) => n.id === fromId);
    const toNode = nodes.find((n) => n.id === toId);
    if (!fromNode || !toNode) return '';

    if (toNode.y > fromNode.y) {
      // Flowing downwards
      const x1 = fromNode.x + 55;
      const y1 = fromNode.y + 50;
      const x2 = toNode.x + 55;
      const y2 = toNode.y;
      return `M ${x1} ${y1} C ${x1} ${y1 + 40}, ${x2} ${y2 - 40}, ${x2} ${y2}`;
    } else if (toNode.y < fromNode.y) {
      // Flowing upwards
      const x1 = fromNode.x + 55;
      const y1 = fromNode.y;
      const x2 = toNode.x + 55;
      const y2 = toNode.y + 50;
      return `M ${x1} ${y1} C ${x1} ${y1 - 40}, ${x2} ${y2 + 40}, ${x2} ${y2}`;
    }

    // Flowing horizontally
    const isRight = toNode.x > fromNode.x;
    const x1 = isRight ? fromNode.x + 110 : fromNode.x;
    const y1 = fromNode.y + 25;
    const x2 = isRight ? toNode.x : toNode.x + 110;
    const y2 = toNode.y + 25;
    return `M ${x1} ${y1} C ${x1 + (isRight ? 40 : -40)} ${y1}, ${x2 + (isRight ? -40 : 40)} ${y2}, ${x2} ${y2}`;
  };

  return (
    <section id="architecture" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs mb-4">
            <Shield size={14} /> Mobile Architect
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] text-zinc-100 mb-3">Platform Architecture</h2>
          <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            An interactive blueprint of a scalable, resilient mobile ecosystem. Hover over nodes for technical details, and use the filters to trace data flows.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 bg-zinc-900/50 p-4 rounded-2xl border border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-2">Flows:</span>
            {['all', 'read', 'write', 'sync', 'cicd'].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFlow(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${activeFlow === f ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' : 'bg-white/5 text-zinc-400 hover:bg-white/10 border border-transparent'}`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-2">Speed:</span>
            {['slow', 'normal', 'fast'].map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${speed === s ? 'bg-blue-400/20 text-blue-200 border border-blue-400/40' : 'bg-white/5 text-zinc-400 hover:bg-white/10 border border-transparent'}`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto bg-zinc-900/20 rounded-3xl border border-white/5 p-4 md:p-8 overflow-x-auto">
          <div className="min-w-[680px]">
            <svg viewBox="0 0 680 860" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' }}>
              <defs>
                <style>
                  {`
                    .flow-line-platform {
                      stroke-dasharray: 6;
                      animation: dash-platform linear infinite;
                    }
                    @keyframes dash-platform {
                      to { stroke-dashoffset: -12; }
                    }
                  `}
                </style>
              </defs>

              {layers.map((layer) => (
                <g key={layer.id}>
                  <rect x="10" y={layer.y - 20} width="660" height="100" rx="12" fill={`${layer.color}05`} stroke={`${layer.color}20`} strokeWidth="1" strokeDasharray="4 4" />
                  <text x="20" y={layer.y - 5} fill={layer.color} fontSize="10" fontWeight="bold" letterSpacing="1" opacity="0.7" className="uppercase font-mono">{layer.label}</text>
                </g>
              ))}

              {connections.map((conn, i) => {
                const isActive = activeFlow === 'all' || conn.flows.includes(activeFlow);
                return (
                  <path
                    key={i}
                    d={generatePath(conn.from, conn.to)}
                    fill="none"
                    stroke={isActive ? '#fff' : '#ffffff10'}
                    strokeWidth={isActive ? 2 : 1}
                    opacity={isActive ? 0.6 : 0.2}
                    className={isActive ? 'flow-line-platform' : ''}
                    style={{ animationDuration: `${currentSpeed}s` }}
                  />
                );
              })}

              {nodes.map((node) => {
                const isHovered = hoveredNode === node.id;
                return (
                  <g
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="cursor-pointer transition-transform duration-300"
                    style={{ transformOrigin: `${node.x + 55}px ${node.y + 25}px`, transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                  >
                    <rect
                      x={node.x} y={node.y}
                      width="110" height="50" rx="8"
                      fill={`${node.color}15`}
                      stroke={node.color}
                      strokeWidth={isHovered ? 3 : 1.5}
                      strokeDasharray={node.dashed ? '4 4' : 'none'}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    <text x={node.x + 55} y={node.y + 22} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" style={{ pointerEvents: 'none' }}>{node.label}</text>
                    <text x={node.x + 55} y={node.y + 38} textAnchor="middle" fill={`${node.color}cc`} fontSize="9" className="font-mono" style={{ pointerEvents: 'none' }}>{node.sub}</text>

                    {node.pulsing && (
                      <circle cx={node.x + 110} cy={node.y} r="4" fill="#ef4444">
                        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          <AnimatePresence>
            {hoveredNode && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-800/95 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl w-[90%] md:w-[400px] pointer-events-none z-50"
              >
                {(() => {
                  const node = nodes.find((n) => n.id === hoveredNode);
                  if (!node) return null;
                  return (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: node.color }} />
                        <h4 className="font-bold text-white text-sm">{node.label}</h4>
                        <span className="text-xs font-mono text-zinc-400 ml-auto">{node.sub}</span>
                      </div>
                      <p className="text-zinc-300 text-xs leading-relaxed">{node.details}</p>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6">
          {layers.map((layer) => (
            <div key={layer.id} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: layer.color }} />
              <span className="text-xs font-mono text-zinc-400 uppercase">{layer.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}