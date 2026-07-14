from datetime import datetime


def current_date():
    return datetime.now().strftime("%Y-%m-%d")


def current_time():
    return datetime.now().strftime("%H:%M")


def success_response(message, data=None):
    return {
        "success": True,
        "message": message,
        "data": data,
    }


def error_response(message):
    return {
        "success": False,
        "message": message,
    }


def clean_text(text: str):

    if text is None:
        return ""

    return " ".join(text.strip().split())