from langgraph.graph import StateGraph, START, END
import traceback

from app.langgraph.state import AgentState
from app.langgraph.agent import crm_agent


def process_interaction(state: AgentState):
    """
    Process user interaction using Groq AI.
    """

    try:
        print("=" * 60)
        print("USER INPUT:", state["user_input"])

        user_input = state["user_input"]

        ai_response = crm_agent.chat(user_input)

        print("AI RESPONSE:", ai_response)
        print("AI RESPONSE TYPE:", type(ai_response))

        state["ai_response"] = str(ai_response)
        state["success"] = True
        state["error"] = None

        return state

    except Exception as e:

        print("=" * 60)
        print("GRAPH ERROR:")
        traceback.print_exc()
        print("ERROR:", str(e))
        print("=" * 60)

        state["success"] = False
        state["ai_response"] = ""
        state["error"] = str(e)

        return state


workflow = StateGraph(AgentState)

workflow.add_node(
    "process_interaction",
    process_interaction,
)

workflow.add_edge(
    START,
    "process_interaction",
)

workflow.add_edge(
    "process_interaction",
    END,
)

graph = workflow.compile()